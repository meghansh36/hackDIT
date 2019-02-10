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

# df = pd.read_csv("Training.csv")
# test_df = pd.read_csv("Test.csv")
# print(df.head)

# X_train = df.iloc[:,:-1].values
# Y_train = df.iloc[:,-1].values
# X_test = test_df.iloc[:,:-1].values
# Y_test = test_df.iloc[:,-1].values

# from sklearn.ensemble import RandomForestClassifier
# classifier = RandomForestClassifier()
# classifier.fit(X_train,Y_train)

# pickle.dump(classifier, open("classifier_pickle", 'wb'))

def init():
    dict = {
        "Itching": "itching",
        "Rashes": "skin_rash",
        "Skin Eruptions": "nodal_skin_eruptions",
        "Sneezing": "continuous_sneezing",
        "Shivering": "shivering",
        "Chills": "chills",
        "Joint Pain": "joint_pain",
        "Stomach Pain": "stomach_pain",
        "Acidity": "acidity",
        "Vomiting": "vomiting",
        "Fatigue": "fatigue",
        "Weight Gain": "weight_gain",
        "Anxiety": "anxiety",
        "Cold Hand And Feet": "cold_hands_and_feets",
        "Mood Swings": "mood_swings",
        "Weight Loss": "weight_loss",
        "Restlessness": "restlessness",
        "Lethargy": "lethargy",
        "Irregular Sugar Level": "irregular_sugar_level",
        "Cough": "cough",
        "Fever": "high_fever",
        "Sunken Eyes": "sunken_eyes",
        "Breathlessness": "breathlessness",
        "Sweating": "sweating",
        "Dehydration": "dehydration",
        "Indigestion": "indigestion",
        "Headache": "headache",
        "Yellowish Skin": "yellowish_skin",
        "Dark Urine": "dark_urine",
        "Nausea": "nausea",
        "Loss of Appetite": "loss_of_appetite",
        "Pain behind the eyes": "pain_behind_the_eyes",
        "Back Pain": "back_pain",
        "Constipation": "constipation",
        "Abdominal Pain": "abdominal_pain",
        "Diarrhoea": "diarrhoea",
        "Yellowing of Eyes": "yellowing_of_eyes",
        "Swelling of Stomach": "swelling_of_stomach",
        "Blurred Vision": "blurred_and_distorted_vision",
        "Phlegm": "phlegm",
        "Throat Irritation": "throat_irritation",
        "Redness of Eyes": "redness_of_eyes",
        "Runny Nose": "runny_nose",
        "Congestion": "congestion",
        "Chest Pain": "chest_pain",
        "Weakness in Limbs": "weakness_in_limbs",
        "Fast Heart Rate": "fast_heart_rate",
        "Pain During Bowel Movements": "pain_during_bowel_movements",
        "Neck Pain": "neck_pain",
        "Dizziness": "dizziness",
        "Cramps": "cramps",
        "Bruising": "bruising",
        "Obesity": "obesity",
        "Swollen Legs": "swollen_legs",
        "Swollen Blood Vessels": 'swollen_blood_vessels',
        "Puffy Face and Eyes": 'puffy_face_and_eyes',
        "Brittle Nails": "brittle_nails",
        "Excessive Hunger": "excessive_hunger",
        "Dried Lips": "drying_and_tingling_lips",
        "Slurred Speech": 'slurred_speech',
        "Knee Pain": "knee_pain",
        "Hip Joint Pain": "hip_joint_pain",
        "Muscle Weakness": "muscle_weakness",
        "Stiff Neck": "stiff_neck",
        "Swelling Joints": "swelling_joints",
        "Movement Stiffness": "movement_stiffness",
        "Loss of Balance": 'loss_of_balance',
        "Unsteadiness": 'unsteadiness',
        "Loss of Smell": "loss_of_smell",
        "Foul Smell of Urine": "foul_smell_of urine",
        "Continuous Feel of Urine": "continuous_feel_of_urine",
        "Internal Itching": "internal_itching",
        "Depression": "depression",
        "Irritability": "irritability",
        "Muscle Pain": "muscle_pain",
        "Red Spots Over Body": "red_spots_over_body",
        "Belly Pain": "belly_pain",
        "Watering From Eyes": "watering_from_eyes",
        "Increased Appetite": "increased_appetite",
        "Lack of Concentration": "lack_of_concentration",
        "Blood in Sputum": "blood_in_sputum",
        "Painful Walking": "painful_walking",
        "Pimples": "pus_filled_pimples",
        "Blackheads": "blackheads",
        "Skin peeling": "skin_peeling",
        "Small Dents in Nails": "small_dents_in_nails",
        "Blisters": "blister",
        "Red Sores Around Nose": "red_sore_around_nose"
    }

    return dict


def predict(symptoms):
    dict = init()
    test_df = pd.read_csv("Test.csv")
    test_df.drop(["prognosis"], axis=1)
    df = pd.DataFrame(columns=test_df.columns)
    for i in range(len(symptoms)):
        print(symptoms[i])
        df.loc[0, dict[symptoms[i]]] = 1
    
    df.fillna(0, inplace=True)
    X_val = df.iloc[-1,:].values
    print(len(X_val))
    classifier = pickle.load(open('classifier_pickle', 'rb'))
    result = classifier.predict(X_val[:-1].reshape(1,-1))
    return result
