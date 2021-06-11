# verb as a different meaning outside and inside of the block, given that the one outside is not global and is not seen
# by the block
verb = 'rescued'
['sedated', 'sprinkled', 'electrocuted'].
  each do |verb|
    puts "Dr. Cham " + verb + " his niece Hannah."
end
puts "Finally, Dr. Cham " + verb + " his niece Hannah."
