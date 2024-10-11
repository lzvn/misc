require 'json'
SAVES_FOLDER = "./savedfiles/"

def get_word()
    dict = File.open("dict_filtered.txt")
    Random.srand(Time.now.to_i)

    lines_number = 1 #starts at 1 due to the fact it is counting
    until dict.eof?
        dict.readline
        lines_number+=1
    end
    dict.rewind

    word_line = (lines_number*rand).floor

    word_line.times do
        dict.readline
    end
    
    word = dict.readline.chomp
    dict.close

    word
end

def save_game(word, right_guesses, wrong_guesses)
    puts "Please, enter the name of the save"
    name = gets.chomp
    ['.', ',', '/', '\\'].each do |char|
        name.tr(char, '')
    end

    Dir.mkdir SAVES_FOLDER unless Dir.exist? SAVES_FOLDER
    save_file = File.open(SAVES_FOLDER + name + ".json", 'w+')
    save_file.write('{"word": "' + word + '"' + 
                    ', "right_guesses": "[' + right_guesses.join(',') + 
                    ']", "wrong_guesses": "['  + wrong_guesses.join(',') + ']"' + 
                    '}' )
    save_file.close
end

def load_game()
    unless Dir.exist? SAVES_FOLDER
        puts "No saved games found"
        return
    end
    puts Dir.children(SAVES_FOLDER)
    if Dir.exist? SAVES_FOLDER and Dir.children(SAVES_FOLDER).empty?
        puts "No saved games found"
        return
    end

    puts "Saved games found: "
    saves_found = Dir.children(SAVES_FOLDER)
    saves_found.size.times do |i|
        puts (i+1).to_s + ": " + saves_found[i].split('.')[0]
    end

    puts "Enter the number of the saved game you wish to play"
    puts "Or press 0 to cancel"

    while
        chosen = gets.chomp.downcase[0]

        return if chosen == "0"

        if (1..saves_found.size).to_a.include? chosen.to_i
            puts "Loading saved game"
            saved_game = File.open(SAVES_FOLDER + saves_found[(chosen.to_i-1)])
            save_obj = JSON.parse(saved_game.read)
            saved_game.close

            save_obj["right_guesses"] = save_obj["right_guesses"].split("[")[1].split("]")[0].split(',')
            save_obj["wrong_guesses"] = save_obj["wrong_guesses"].split("[")[1].split("]")[0].split(',')

            return save_obj
        else
            puts "Please enter a valid answer"
        end
    end


end

def game(word)
    max_guesses = 11

    puts "Game started"
    puts "Write 0 to exit, 1 to save and 2 to load a file"
    puts "\n"

    game_over = false
    right_guesses = []
    wrong_guesses = []

    while !game_over
        word.size.times do |i|
            char = "_"
            right_guesses.each do |guess|
                if guess == word[i]
                    char = guess
                    break
                end
            end

            print char
        end
        puts

        puts "Number of guesses remaining: " + (max_guesses - wrong_guesses.size).to_s
        puts "Right guesses: " + right_guesses.join(", ")
        puts "Wrong guesses: " + wrong_guesses.join(", ")

        puts

        puts "Write a guess"
        while
            guess = gets
            next if guess=="\n"
            guess = guess.chomp.downcase[0]

            if(guess == "0")
                return
            elsif(guess == "1")
                save_game(word, right_guesses, wrong_guesses)
                puts "Write a guess"
                next
            elsif(guess == "2")
                save_obj = load_game()

                unless save_obj.nil?
                    10.times do
                        puts
                    end
                    word = save_obj["word"]
                    right_guesses = save_obj["right_guesses"]
                    wrong_guesses = save_obj["wrong_guesses"]

                    break
                end


                puts "Write a guess"
                next
            end

            if right_guesses.include? guess or wrong_guesses.include? guess
                puts "Guess already made, try another one"
            else
                break
            end
        end
        puts

        if word.include? guess
            right_guesses.push(guess)

            chars_found = 0
            word.each_char do |char|
                chars_found+=1 if right_guesses.include? char
            end

            if chars_found==word.size
                puts word
                puts "GAME OVER! YOU WON!"
                game_over = true
                break
            end
        else
            wrong_guesses.push(guess)
            if wrong_guesses.size >= max_guesses
                game_over = true
                puts "GAME OVER! YOU LOST!"
            end
        end

    end
end

puts "Welcome to Hangman!"
puts "\n"

word = get_word

puts word

game(word)

"Goodbye!"
