dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]

def substrings(words, dict)
    count = Hash.new
    dict.each do |word|
        if words.include? word
            count[word] = words.scan(word).length
        end
    end

    return count
end

puts "below"
puts substrings("below", dictionary)

puts "\n"

puts substrings("Howdy partner, sit down! How's it going?", dictionary)