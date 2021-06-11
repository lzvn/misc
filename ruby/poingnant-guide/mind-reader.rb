require './endertromb.rb'

class MindReader
  def initialize
    @minds = Endertromb::scan_for_sentience
  end
  def read
    @minds.collect do |mind| mind.read end
  end
end

close_minds = MindReader.new
close_minds.read
