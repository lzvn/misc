def caesar_cyper(str, factor)

    str.split("").map do |c|
        chars = ('a'..'z').to_a
        unless chars.include? c.downcase
            next c
        end
        chars = ('A'..'Z').to_a if c.upcase == c
        cypher_index = (chars.index c) + factor
        cypher_index = cypher_index - chars.length if cypher_index >= chars.length
        chars[cypher_index]
    end.join("")
end

phrase = ARGV[0]
factor = ARGV[1].to_i

puts caesar_cyper(phrase, factor)