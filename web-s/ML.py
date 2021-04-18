# code to load data
import numpy as np
import pandas as pd  
import csv
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
from sklearn.datasets import make_swiss_roll
from sklearn.manifold import Isomap
# code to load data
n_components = 2

data = pd.read_csv('hs_data_clean.csv')
data.drop('Name', inplace=True, axis=1)
data.drop('Position', inplace=True, axis=1)
data.drop('Year', inplace=True, axis=1)
new_df = data.dropna()
new_df.replace(np.inf, 0) 
new_df.to_csv('t-sne.csv', index=False, encoding='utf-8')
#data_array = np.genfromtxt('t-sne.csv', delimiter=',')
#np.nan_to_num(data_array)


samples = np.genfromtxt('t-sne.csv', delimiter=',')
# samples is ur data


embedding = Isomap(n_components=n_components)
X_isomap = embedding.fit_transform(samples)

fig = plt.figure(figsize=(6, 3))
plt.scatter(X_isomap[:, 0], X_isomap[:, 1], c=fh_lables, cmap='jet')
plt.title("ISOMAP n=500, k=8, time=%f" % round(iso_end-iso_start, 3))