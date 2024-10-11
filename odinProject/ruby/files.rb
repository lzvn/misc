fl = IO.sysopen('./file.txt', 'w+')
# fl_stream = IO.new(fl) # this will not work on windows
fl_stream = IO.new(fl, 'w+') # windows requires the extra parameter since in it, the stream will not inherit its parent permissions

fl_stream.puts "Hello, file!"

puts fl_stream.gets #nil output since at this point, we're at the end of the file

fl_stream.rewind

puts fl_stream.gets #now it prints since we went back to the start

fl_stream.close