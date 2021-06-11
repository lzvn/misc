def yield_thrice
  yield
  yield
  yield
end

fruits = ['apple', 'orange', 'banana', 'tomato']
fruit = 'pineapple'

yield_thrice {puts fruits.shift}

puts "\nRest of fruits:"
puts fruits
