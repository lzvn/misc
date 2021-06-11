puts 'Type your message'
message = gets
encrypted = ""
message.each_char do |letter|
  ch_code = letter.ord
  if (ch_code>=68 and ch_code<=90) or (ch_code>=100 and ch_code<=122)
    encrypted<<(ch_code-3).chr
  elsif (ch_code>=65 and ch_code <68)
    encrypted<<(ch_code-64-3+90).chr
  elsif (ch_code>=97 and ch_code <100)
    encrypted<<(ch_code-96-3+122).chr
  else
    encrypted<<letter
  end
end

File::open('message.txt', 'w') do |f|
  f<<encrypted
end
