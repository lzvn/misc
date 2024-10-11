import numpy as np

def sigmoid(x):
    return ( 1 / ( 1 + np.exp(-x) ) )

def derivSigmoid(x):
  fx = sigmoid(x)
  return fx * (1 - fx)

class Neuron:
    def __init__(self, weights, bias):
        self.weights = weights
        self.bias = bias

    def updateSelf(weights, bias):
        self.weights = weights
        self.bias = bias

    def feedForward(self, inputs):
        total = np.dot(self.weights, inputs) + self.bias
        return sigmoid(total)

class NeuralNetwork:
    def __init__(self, layers):
        # layers[0] doesn't actually correspond to neurons and is the number of inputs :)
        layer_number = len(layers)
        self.net = []
        for i in range(1, layer_number):
            input_num = layers[i-1]
            bias = 0
            weights = np.empty(input_num)
            self.net.append([])
            for j in range(0, layers[i]):
                self.net[i-1].append(Neuron(weights, bias))
        
    def process(self, inputs):
        layerInputs = inputs
        nextInputs = []
        output = []
        for i in range(0, len(self.net)):
            for j in range(0, len(self.net[i])):
                nextInputs.append(self.net[i][j].feedForward(np.array(layerInputs)))
            layerInputs = nextInputs.copy()
            nextInputs = []
        output = layerInputs.copy()
        return output

    def calcMseLoss(y_true, y_pred):
        return ((y_true - y_pred) ** 2).mean()

layers = [2, 2, 1]
net = NeuralNetwork(layers)
print(net.process([2, 2]))
