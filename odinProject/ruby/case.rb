#grade = gets.to_i
grade = -1

did_i_pass = case grade.ceil
when 7..10 then "yes"
when 3..6 then "retake test"
when 0..2 then "no"
else "dunno"
end

puts did_i_pass

c = 'E'
# case/when is different from switch/case in c/c++
# you can't stack "when"s like with "case" without the break, but you can use one
# when for many answers as thus:
case c
when 'A', 'B', 'C' # one way is with commas
    puts 'ABC'
when 'D'
    puts 'D'
when *['E', 'F', 'G'] # the other is with this "star notaion" and an array
    puts 'EFG'
else
    puts 'I don\'t get it'
end

# nice