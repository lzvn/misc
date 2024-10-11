from buck import *
import random
import math

MAX_POP=100
MOST_FIT_POP=math.ceil(MAX_POP/20)
TARGET_VORIP=0.009375 # V
MAX_ITERATIONS=1000
MAX_CAP=100000
TOLERANCE=TARGET_VORIP/1000

class Gene:
    def __init__(self, solution):
        self.solution = solution
        self.grade = float('inf')

def sortByGrade(population):
    sorted_pop=[]
    for i in range(0, MAX_POP):
        index=-1
        grade=float('inf')
        for j in range(0, len(population)):
            if(population[j].grade<grade):
                grade=population[j].grade
                index=j
        sorted_pop.append(population[index])
        population.pop(index)
    return sorted_pop

def getMostFit(population):
    sorted_pop = sortByGrade(population)
    return sorted_pop[0:MOST_FIT_POP+1]

def calcGrade(result):
    return math.fabs(result-TARGET_VORIP)

circ = BuckCircuit(30, 0.5, 1000, 10000, 10, 1000)
# original cap: 10000pF = 10uF
# wanted VoutRipple = 0.009375V

count=0
population=[]
mostFit=[]
bestSolution=0
all_in_tolerance=False

for i in range(0, MAX_POP):
    population.append(Gene(MAX_CAP*random.random()))

while(count < MAX_ITERATIONS and all_in_tolerance==False):
    print("Iteration:", count+1)
    #for i in range(0, MAX_POP):
    #   print("Solution", i, ":", population[i].solution)

    for i in range(0, MAX_POP):
        circ.setCapacitor(population[i].solution)
        population[i].grade = calcGrade(circ.getVoutRipple())
    mostFit=getMostFit(population)

    del population
    population=[]

    children_pop=math.ceil(MAX_POP/MOST_FIT_POP)
    for i in range(0, len(mostFit)):
        for j in range(0, children_pop):
            solution = mostFit[i].solution+(mostFit[i].grade*MAX_POP*(2*random.random()-1)/TOLERANCE)
            population.append(Gene(solution))

    for i in range(len(population), MAX_POP):
        population.append(Gene(MAX_CAP*random.random()))

    all_in_tolerance=True
    for i in range(0, len(mostFit)):
        if(mostFit[i].grade>TOLERANCE):
            all_in_tolerance=False

    bestSolution=mostFit[0].solution
    del mostFit
    mostFit=[]
    count+=1

if(count>=MAX_ITERATIONS):
    print("Maximum number of iterations reached")
print("Best Solution:", "{0:0.1f}".format(bestSolution))
