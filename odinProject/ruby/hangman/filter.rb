# it is a simple script that filters all words with less than 5 characters or more than 12 characters
# not really required, I'm just doing it to make the code of the game simpler

dict = File.open("dict.txt")
dict_filtered = File.open("dict_filtered.txt", 'w+')

until dict.eof
    line = dict.readline
    if line.size > 5 and line.size < 14
        dict_filtered.write(line)
    end
end

dict.close
dict_filtered.close