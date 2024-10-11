a = ["This", "is", "a", "small", "array"]

puts a

b = Array.new(3, 4) # first argument is size, second is the default value
puts b

puts

puts a[1]
puts a[-1]

puts
puts a.first # first element
puts a.first(2) # first two elements (yey)
puts a.last(3) # last three elements (just as easy)

puts

a.push("of", "strings") # pushes to the end of the stack
puts a
puts
a << "!" # sintactic sugar for push
puts a
puts
a.pop # removes the last of the stack (last of the array)
puts a
puts

# unshift is like push, but for the beginning
# shift is like pop, for for the beginning

# pop and shift take arguments that are the number of elements removed

c = [1, 2, 3]
d = [3, 4, 5]

# summing arrays is the same as concatenation
puts c+d 

puts

puts c-d #gives a copy of the first array (c) without all elements present in the second one (d)

puts a.join(" ")