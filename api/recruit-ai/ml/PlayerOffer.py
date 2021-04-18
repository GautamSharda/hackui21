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

# Create labels
names = college_data[:,1]
labels = []
for i in range(hs_data.shape[0]):
    index = np.searchsorted(names, hs_data[i][0])
    if index >= len(names) or names[index] != hs_data[i][0]:
        del_indices.append(i)

del_indices = np.array(del_indices)
for i in del_indices:
    hs_data_made_it = np.delete(hs_data, i, 0)
    del_indices -= 1

print(hs_data_made_it.shape)

# Set the batch size and validation and test split
batch_size = 40
vt_split = .3

shuffle_dataset = True