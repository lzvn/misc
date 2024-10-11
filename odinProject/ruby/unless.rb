print "What's your age? "
age = gets.to_i

# "unless you're younger than 18 you should get a job, otherwise you should be at school"
unless age < 18
    puts "Get a job"
else
    puts "Go to school, kid"
end