# why never showed the code of endertromb or what it did, just said it was another file with definitions
#I took the liberty of making one for the purpose of teaching this code
require './endertromb.rb'
class WishMaker
  def initialize
    @energy = rand(6)
  end
  def grant(wish)
    raise ArgumentError, "Bad Wish" if(wish.length>10 or wish.include? ' ')
    raise Exception, "No Energy Left" if @energy.zero?
    @energy -= 1
    Endertromb::make(wish)
  end
end

today_wish = WishMaker.new

today_wish.grant('antlers')
