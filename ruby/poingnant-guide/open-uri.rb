require 'open-uri'

open('https://poignant.guide/book/chapter-6.html') do |text|
  File::open('poignant-guide-chapter6.html', 'w') do |file|
    file<<text.read
  end
end


open('./poignant-guide-chapter6.html') do |file|
  puts file.read
end
