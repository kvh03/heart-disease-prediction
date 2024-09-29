import numpy as np
import pandas as pd
import joblib
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

heart_data = pd.read_csv('heart-disease-prediction\heart_disease_data.csv')

# Splitting the Features and Target
X = heart_data.drop(columns='target', axis=1)
Y = heart_data['target']

# Splitting the Data into Training data & Test Data
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, stratify=Y, random_state=2)

# Model Training
model = LogisticRegression()

# training the LogisticRegression model with Training data
model.fit(X_train, Y_train)

# accuracy on training data
X_train_prediction = model.predict(X_train)
training_data_accuracy = accuracy_score(X_train_prediction, Y_train)
print('Accuracy on Training data : ', training_data_accuracy)

# accuracy on test data
X_test_prediction = model.predict(X_test)
test_data_accuracy = accuracy_score(X_test_prediction, Y_test)
print('Accuracy on Testing data : ', test_data_accuracy)


# input_data = (59,0,0,174,249,0,1,143,1,0,1,0,2)

# # change the input data to a numpy array
# input_data_as_numpy_array= np.asarray(input_data)

# # reshape the numpy array as we are predicting for only on instance
# input_data_reshaped = input_data_as_numpy_array.reshape(1,-1)

# prediction = model.predict(input_data_reshaped)
# print(prediction)

# if (prediction == 0):
#   print('The Person does not have a Heart Disease')
# else:
#   print('The Person has Heart Disease')

joblib.dump(model, 'heart_disease_model.joblib')