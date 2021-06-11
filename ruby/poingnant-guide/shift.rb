fruits = ['apple', 'orange', 'banana'] #very creative

(1..3).each do |i|
  puts fruits.shift
end

puts "\n\nRest of fruits: "
puts fruits
