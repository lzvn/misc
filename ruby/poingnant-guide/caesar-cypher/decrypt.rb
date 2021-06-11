decrypted = ""

File::open('message.txt', 'r') do |f|
  f.each_char do |letter|
    ch_code = letter.ord
    if (ch_code>=65 and ch_code<=87) or (ch_code>=97 and ch_code<=119)
      decrypted<<(ch_code+3).chr
    elsif (ch_code>=88 and ch_code <91)
      decrypted<<(ch_code+64+3-90).chr
    elsif (ch_code>=120 and ch_code <123)
      decrypted<<(ch_code+96+3-122).chr
    else
      decrypted<<letter
    end
  end
end
puts decrypted
