import numpy as np

class Perceptron:
    def __init__(self, weights, bias):
        self.weights = weights
        self.bias = bias

    def updateWeights(self, weights):
        self.weights = weights
    
    def updateBias(self, bias):
        self.bias = bias

    def process(self, inputs):
        inputSum = np.dot(inputs, self.weights) + self.bias
        output = 0
        if inputSum>=0: output = 1
        return output

    def mseLoss(output, output_expected):
        return ((output - output_expected)**2).mean()

    def derivMseLoss(self, inputs, weight_index, output_expected):
        weightedSum = np.dot(inputs, self.weights) + self.bias;
        deriv = 0
        input_factor = 1
        if weight_index >= 0: input_factor = inputs[weight_index]
        if weightedSum != 0: deriv = 2*(self.process(inputs) - output_expected)*input_factor
        return deriv

    def train(self, data):
        # data is expected to be an numpy matrix with the arrangement of column 0 to N-2
        # being the inputs and N-1 the output and N is the number of columns
        row = []
        all_went_right = True
        train_weight = 1

        for i in range(0, len(data)):
            row = np.array(data[i])
            current_output = self.process(row[0:(len(row)-1)])
            if current_output != row[len(row)-1]:
                all_went_right = False
                correction = train_weight*self.derivMseLoss( row[0:(len(row)-1)], -1, row[len(row)-1] )
                self.bias = self.bias - correction
                for j in range(0, len(self.weights)):
                    correction = train_weight*self.derivMseLoss( row[0:(len(row)-1)], j, row[len(row)-1] )
                    self.weights[j] = self.weights[j] - correction

        if all_went_right == False: self.train(data)
        else: return

perceptron = Perceptron([1, 1], 0)

train_data = np.array( [ [0, 0, 0], [0, 1, 0], [1, 0, 0], [1, 1, 1] ] ) # AND gate
perceptron.train(train_data)
