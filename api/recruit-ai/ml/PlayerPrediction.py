# imports and fixed params
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from least_squares import regress

college_data = pd.read_csv("data/players2014.csv").to_numpy()
for i in range(15, 21):
    college_data = np.append(college_data, pd.read_csv("data/players20%d.csv" % i).to_numpy(), axis=0)
college_data = college_data[college_data[:, 1].argsort()]
print(college_data.shape)

hs_data = pd.read_csv("data/hs_data_clean.csv").to_numpy()
print(hs_data.shape)


names = college_data[:,1]
hs_indices = []
college_indices = []
for i in range(hs_data.shape[0]):
    index = np.searchsorted(names, hs_data[i][0])
    if index < len(names) and names[index] == hs_data[i][0]:
        college_indices.append(index)
        hs_indices.append(i)
 
college_indices = np.array(college_indices)
college_data_made_it = college_data[college_indices,:]
college_data_made_it = college_data_made_it[college_data_made_it[:, 1].argsort()]

hs_indices = np.array(hs_indices)
hs_data_made_it = hs_data[hs_indices,:]
hs_data_made_it = hs_data_made_it[hs_data_made_it[:, 0].argsort()]

print(hs_data_made_it.shape)
print(college_data_made_it.shape)



X_data = np.array(hs_data_made_it[:,2:-1]).astype(np.float)
print(X_data.shape)

Y_data = np.array(college_data_made_it[:,5]).astype(np.float)
Y_data = np.array([Y_data]).T
print(Y_data.shape)

data = np.append(X_data, Y_data, axis=1)
print(hs_data_made_it[0])
print(college_data_made_it[0])
print(data[0])
data = np.nan_to_num(data)

print()
x_hat = regress(1, .3, data)
print(x_hat)

print(hs_data[0])
print(np.dot(hs_data[0][2:-1], x_hat))
