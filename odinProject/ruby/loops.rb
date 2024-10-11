# loop
puts "loop"

i = 0
loop do
    puts i
    i += 1
    break if i==10 # remove this or the line above and it becomes infinite
                   # move this to the start of the iteration to get 10 to show up
end

puts


# while
puts "while"

i = 0
while i <= 10
    puts i
    i+=1
end

puts


# until

puts "until"

i = 0
until i == 10 #put a > instead of == to get 10 to show up
    puts i
    i+=1
end

puts

# for

puts "for"

for i in 1..10 # i...10 is the same, but without the 10
    puts i
end

puts

# times

puts "times"
10.times do |i| #10 doesn't show up
    puts i
end

puts

# upto, downto

#10 and 0 are printed in both loops
0.upto(10) do |i|
    puts i
end

puts

10.downto(0) do |i|
    puts i
end