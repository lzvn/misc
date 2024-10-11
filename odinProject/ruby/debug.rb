require 'pry-byebug'

name = "hello"

byebug
# the binding.pry used in the lesson from the odin project is excessively printing stuff, dunno what it is
# this byebug one is working fine

name.upcase!

puts name