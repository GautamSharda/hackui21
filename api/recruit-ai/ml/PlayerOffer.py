# imports and fixed params
import numpy as np
import pandas as pd
import torch
from torchvision import transforms, utils
from torch import nn, optim
from torch.utils.data.sampler import SubsetRandomSampler
from torch.utils.data import TensorDataset, DataLoader
from torch.autograd import Variable

import tqdm
import matplotlib.pyplot as plt
from least_squares import regress

# Load and concatenate college data
college_data = pd.read_csv("data/players2014.csv").to_numpy()
for i in range(15, 21):
    college_data = np.append(college_data, pd.read_csv(
        "data/players20%d.csv" % i).to_numpy(), axis=0)
college_data = college_data[college_data[:, 1].argsort()]
print(college_data.shape)

# Load in high school data
hs_data = pd.read_csv("data/hs_data_clean.csv").to_numpy()
print(hs_data.shape)

# Do some stuff
names = college_data[:, 1]
hs_indices = []
made_it_boolean = []
for i in range(hs_data.shape[0]):
    index = np.searchsorted(names, hs_data[i][0])
    if index < len(names) and names[index] == hs_data[i][0]:
        made_it_boolean.append(1)
        hs_indices.append(i)
    else:
        made_it_boolean.append(0)

made_it_boolean = np.array(made_it_boolean)
print(made_it_boolean.shape)

X_data = np.array(hs_data[:, 2:-1]).astype(np.float)
print(X_data.shape)

Y_data = np.array(made_it_boolean).astype(np.float)
Y_data = np.array([Y_data]).T
print(Y_data.shape)

data = np.append(X_data, Y_data, axis=1)

# Set the batch size and validation and test split
batch_size = 40
vt_split = .3

shuffle_dataset = True
print(data.shape)

# Create validation and test split
data_size = len(data)
indices = np.arange(data_size)
split = int(np.floor(vt_split * data_size))
test_split = int(np.floor(split/2))

# Shuffle data
if shuffle_dataset:
    np.random.shuffle(indices)

train_indices = indices[split:]
val_indices = indices[test_split: split]
test_indices = indices[:test_split]

train_sampler = SubsetRandomSampler(train_indices)
val_sampler = SubsetRandomSampler(val_indices)
test_sampler = SubsetRandomSampler(test_indices)

# Transform data into a TensorDataset
# Change numpy array to tensor
x_data = np.array(np.array(np.delete(data, -2, 1)[:, :], dtype='float32'))
#x_data = np.array(X_data, dtype='float32')
y_data = np.array(np.array(data[:, -2], dtype='int64'))
#y_data = np.array(Y_data, dtype='int64')[0]

tensor_x = torch.from_numpy(x_data)
tensor_y = torch.from_numpy(y_data)
# print(tensor_y)
dataset = TensorDataset(tensor_x, tensor_y)

train_loader = DataLoader(
    dataset, batch_size=batch_size, sampler=train_sampler)
val_loader = DataLoader(dataset, batch_size=batch_size, sampler=val_sampler)
test_loader = DataLoader(dataset, batch_size=batch_size, sampler=test_sampler)

dataiter = iter(val_loader)
test = dataiter.next()
#print("test", test)


class Net(nn.Module):
    def __init__(self, input_size, hidden_size, class_size):
        super(Net, self).__init__()

        self.layer1 = nn.Linear(input_size, hidden_size)
        self.sigmoid = nn.Sigmoid()
        self.layer2 = nn.Linear(hidden_size, hidden_size)
        self.output_layer = nn.Linear(hidden_size, class_size)

    def forward(self, x):
        output = self.layer1(x)
        output = self.sigmoid(output)

        output = self.layer2(output)
        output = self.sigmoid(output)

        output = self.output_layer(output)

        return output


def get_accuracy(loader, my_net):
    correct = 0
    total = 0
    for x, labels in loader:
        x = Variable(x)
        outputs = my_net(x)
        _, predicted = torch.max(outputs.data, 1)
        total += labels.size(0)
        correct += (predicted == labels).sum()

    return 100 * correct // total


# Begin training/testing model
nnet = Net(8, 4, 2)

cel = nn.CrossEntropyLoss()
adam = torch.optim.Adam(nnet.parameters(), lr=0.002)

epochs = 12
loss_s = []

for epoch in range(epochs):
    loss = torch.tensor([27])
    progress_bar = tqdm.tqdm(train_loader, ncols=100)

    for i, (x, y) in enumerate(progress_bar):
        x_val = Variable(x)
        y_val = Variable(y)

        adam.zero_grad()
        outputs = nnet(x_val)
        print(outputs.shape, y_val.shape)
        loss = cel(outputs, y_val)
        loss.backward()
        adam.step()

        loss_s.append(loss)

train_acc = get_accuracy(train_loader, nnet)
test_acc = get_accuracy(test_loader, nnet)

print('Accuracy on training Data %d %%' % (train_acc))
print('Accuracy on testing Data: %d %%' % (test_acc))
