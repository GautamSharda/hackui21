# imports and fixed params
import numpy as np
import pandas as pd
from random import randrange


college_data = pd.read_csv("data/players2014.csv").to_numpy()
for i in range(15, 21):
    college_data = np.append(college_data, pd.read_csv(
        "data/players20%d.csv" % i).to_numpy(), axis=0)
college_data = college_data[college_data[:, 1].argsort()]
print(college_data.shape)


hs_data = pd.read_csv("data/hs_data_clean.csv").to_numpy()
print(hs_data.shape)


names = college_data[:, 1]
del_indices = []
for i in range(hs_data.shape[0]):
    index = np.searchsorted(names, hs_data[i][0])
    if index >= len(names) or names[index] != hs_data[i][0]:
        del_indices.append(i)

del_indices = np.array(del_indices)
for i in del_indices:
    hs_data_made_it = np.delete(hs_data, i, 0)
    del_indices -= 1

print(hs_data_made_it.shape)


def getPlayerComp(name):
    player = []
    best_players = []
    best_score = 1000000000

    for i in range(hs_data.shape[0]):
        if hs_data[i][0] == name:
            player = hs_data[i]

    if not len(player):
        return hs_data[[randrange(len(hs_data)-1), randrange(len(hs_data)-1), randrange(len(hs_data)-1)]]
    for i in range(1, hs_data_made_it.shape[0]):
        dif = player[2:].astype(np.float) - hs_data[i][2:].astype(np.float)
        score = np.dot(dif, dif)
        if score < best_score:
            best_score = score
            best_players.append(hs_data[i])
    return best_players[-3:]


print(getPlayerComp("Jalen Blackmon"))
