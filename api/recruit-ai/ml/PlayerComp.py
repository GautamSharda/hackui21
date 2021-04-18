# imports and fixed params
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans

data = pd.read_csv('./data/basketball-1.csv')
data = data.to_numpy()

print(data.shape)