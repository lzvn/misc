class Mind
  def initialize
    thought_selector = rand(3)
    case thought_selector
    when 0 
      @thought = 'I need pasta'
    when 1 
      @thought = 'My feet are itchy'
    when 2 
      @thought = 'I like red clothes so much'
    end
  end
  def read
    puts @thought
  end
end

class Endertromb
  def Endertromb::make(wish)
    puts 'Your wish for '+wish+' is granted'
  end
  def Endertromb::scan_for_sentience
    minds_found = [Mind.new, Mind.new, Mind.new]
    minds_found
  end
end
