# code to load data
import numpy as np
import csv
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
from sklearn.datasets import make_swiss_roll
from sklearn.manifold import Isomap
# code to load data
n_components = 2

samples = np.genfromtxt('basketball.csv', delimiter=',')
# samples is ur data


embedding = Isomap(n_components=n_components)
X_isomap = embedding.fit_transform(samples)

fig = plt.figure(figsize=(6, 3))
plt.scatter(X_isomap[:, 0], X_isomap[:, 1], c=fh_lables, cmap='jet')
plt.title("ISOMAP n=500, k=8, time=%f" % round(iso_end-iso_start, 3))