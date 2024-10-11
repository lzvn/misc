def binarySum(a, b):
	 # I'm not considering this for simplicity
	if(len(a) != len(b)):
		return -1

	c = []
	carry=0
	
	for i in range(0, len(a)+1):
		c.append(0)

	i = len(c)-1
	while(i>0):
		c[i] = a[i-1] + b[i-1] + carry

		#print(i, ": ", c[i], " = ", a[i-1], " + ", b[i-1], " + ", carry)

		if(c[i] > 1):
			c[i] -=2
			carry = 1
		else:
			carry=0
		
		i-=1
	c[0]+=carry

	return c

a=[1, 0, 0, 1]
b=[1, 1, 1, 0]
c = binarySum(a, b)

print(a, " + ", b," = ",c)
