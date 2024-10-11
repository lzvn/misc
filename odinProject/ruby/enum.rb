friends = ['Sharon', 'Leo', 'Leila', 'Brian', 'Arun']

puts (friends.each { |friend| friend.upcase } )
# as the elements of the array aren't changed, puts will print them capitalized

puts (friends.each { |friend| friend.upcase! } )
# now they are changed and puts will print them all in upcase

#iow, each returns the value of "friend" as it is at the end of the block, regardless of what happens inside of it

puts friends

friends.each{ |friend| friend.capitalize!}

# map does the same thing, but it returns the output of the map function without the need to change the original array
# so

puts "\nmap:"
puts ( friends.map{ |friend| friend.upcase } )

puts "\noriginal:"
puts friends