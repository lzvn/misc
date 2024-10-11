def insertionSort(array):
	sortedArray = array.copy()
	for i in range(1, len(sortedArray)):
		aux = sortedArray[i]
		j = i -1
		while j>=0 and sortedArray[j]>aux:
			sortedArray[j+1] = sortedArray[j]
			j -= 1
		sortedArray[j+1] = aux
	return sortedArray

def reversedInsertionSort(array):
	sortedArray = array.copy()
	for i in range(1, len(sortedArray)):
		aux = sortedArray[i]
		j = i -1
		while j>=0 and sortedArray[j]<aux:
			sortedArray[j+1] = sortedArray[j]
			j -= 1
			sortedArray[j+1] = aux
	return sortedArray

array = [5, 2, 4, 6, 1, 3]
sortedArray = insertionSort(array)
revSortedArray = reversedInsertionSort(array)

print("original: ", array)
print("sorted: ", sortedArray)
print("reversed sorted: ", revSortedArray)
