#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Feb  7 23:28:15 2019

@author: meghansh
"""

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import pickle

df = pd.read_csv("Training.csv")
test_df = pd.read_csv("Test.csv")
print(df.head)

X_train = df.iloc[:,:-1].values
Y_train = df.iloc[:,-1].values
X_test = test_df.iloc[:,:-1].values
Y_test = test_df.iloc[:,-1].values

from sklearn.ensemble import RandomForestClassifier
classifier = RandomForestClassifier()
classifier.fit(X_train,Y_train)

pickle.dump(classifier, open("classifier_pickle", 'wb'))




