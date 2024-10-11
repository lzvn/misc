class Player
  attr_reader :circle

  def initialize (circle=false)
    @circle = circle
  end

  def symbol
    if circle
      return "O"
    else
      return "X"
    end
  end
  # i could implement more here like points and stuff, but whatever
end

class Board
  attr_reader :board

  def initialize
    @board = Array.new(3) { Array.new(3) }
  end

  def draw
    horz_line = "------------"
    puts
    for i in (0...3)
      for j in (0...3)
        cell = board[i][j] == nil ? " " : board[i][j]
        print " " + cell + " "
        print "|" if j<2
      end
      puts
      puts horz_line if i < 2
    end
    puts
  end

  def mark (row, column, circle=false)
    if row < 0 || row > 2
      return false
    end
    if column < 0 || column > 2
      return false
    end
    unless board[row][column].nil?
      return false
    end

    symbol = "X"
    symbol = "O" if circle == true

    @board[row][column] = symbol
    true
  end

  def full?
    full = true
    board.each do |row|
      full = false if row.include? nil
    end
    full
  end

  def clear
    board.each do |row|
      row.each do |cell|
        cell = nil
      end
    end
  end
end

class Game
  attr_reader :players, :board
  attr_accessor :over

  def initialize
    @players = [Player.new(false), Player.new(true)]
    @board = Board.new
  end

  def winner
    winner = nil
    winner_mark = nil
    b = board.board

    for i in (0...3)
      winner_mark = b[i][0] if b[i][0] == b[i][1] && b[i][2] == b[i][1]
      winner_mark = b[0][i] if b[0][i] == b[1][i] && b[2][i] == b[1][i]
    end

    winner_mark = b[1][1] if b[0][0] == b[1][1] && b[2][2] == b[1][1]
    winner_mark = b[1][1] if b[0][2] == b[1][1] && b[2][0] == b[1][1]

    unless winner_mark.nil?
      winner = winner_mark == players[0].symbol ? 0 : 1
    end
    
    return winner
  end

  def finish_game(winner_player)
    puts "Game over!"
    puts "Winner is player " + (winner_player + 1).to_s
  end

  def play

    over = false
    current_player = 0
    player_input = ""
    puts "GAME STARTED"
    puts "Write row and column as row, column or row,column"
    puts 'Write "exit" to end the game'

    board.draw

    while over==false
      print "Player " + (current_player+1).to_s + ": "
      player_input = gets.chomp

      if player_input.downcase == "exit"
        puts "Game ended"
        return false
      end

      player_input_array = player_input.split(",").map { |x| x.to_i-1 }

      if player_input_array.length < 2
        puts "Wrong format, try again"
        next
      end

      if board.mark(player_input_array[0], player_input_array[1], players[current_player].circle) == false
        puts "Cell occupied or invalid coordinates, try again"
        next
      end

      board.draw

      unless winner.nil?
        finish_game(winner)
        return
      end

      if board.full?
        unless winner.nil?
          finish_game(winner)
        else
          puts "The match ended in a DRAW!"
          return
        end
      end

      current_player = (current_player == 0) ? 1 : 0
    end
    return true
  end
end

g = Game.new

while g.play do
end