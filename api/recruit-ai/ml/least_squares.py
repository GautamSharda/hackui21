# Using least quares affine function
import numpy as np
import numpy.linalg as LA


def train(dataset, labels):
    y = np.where(labels == 1, 1, -1)
    x_hat = LA.lstsq(dataset, y, rcond=1e-10)[0]
    return x_hat, y


def predict(dataset, x_hat):
    y_hat = dataset @ x_hat
    y_hat = np.where(y_hat > 0, 1, -1)
    return y_hat


def evaluate(y_hat, y):
    correct = (y_hat == y).sum()
    print("    Accuracy:", correct / y.shape[0])


# Simple Least Squares to compare to our nn
# shuffle_dataset   Boolean
# test_pct          Percent of test samples
# data              Numpy array
def regress(shuffle_dataset, test_pct, data):
    print('Results using Least squares:')

    data_size = len(data)

    # Create array of indices
    indices = np.arange(data_size)

    # Shuffle data
    if shuffle_dataset:
        np.random.shuffle(indices)

    # Split the data
    test_split = int(np.floor(test_pct * data_size))
    train_indices = indices[test_split:]
    test_indices = indices[:test_split]

    # Create two matricies with the x features and labels respectively
    x_data = np.array(np.array(np.delete(data, -2, 1)[:, :], dtype='float32'))
    y_data = np.array(np.array(data[:, -2], dtype='float32'))

    print("inside",  y_data)

    # Assign data to train / test
    train_x = x_data[train_indices]
    train_y = y_data[train_indices]
    test_x = x_data[test_indices]
    test_y = y_data[test_indices]

    # Train and test training samples
    xh, y_train = train(train_x, train_y)
    yh_train = predict(train_x, xh)

    # Use x hats to predict on the training samples
    yh = predict(test_x, xh)
    y_test = np.where(test_y == 1, 1, -1)

    # Print results
    print("Training Data:")
    evaluate(yh_train, y_train)
    print("Test Data:")
    evaluate(yh, y_test)

    return xh
