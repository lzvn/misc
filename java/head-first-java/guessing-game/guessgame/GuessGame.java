package guessgame;

import java.util.Scanner;
import player.Player;
import java.util.List;
import java.util.Random;
import java.util.ArrayList;

public class GuessGame {
    private List<Player> playersList;
    private Scanner input = new Scanner(System.in);

    public GuessGame() {
        this(3);
    }

    public GuessGame(Integer numPlayers) {
        this.playersList = new ArrayList<Player>();
        for(int i = 0; i < 3; i++) {
            System.out.print("Please, write a nickname for you, player " + Integer.toString(i+1) + ": ");
            String nick = input.nextLine();
            this.playersList.add(new Player(nick));
        }
    }

    public void play() {
        System.out.println("Let's begin the game!");
        Integer maxGuess = this.playersList.size();
        for(int i = 0; i < this.playersList.size(); i++) {
            System.out.print("Player " + this.playersList.get(i).getNickName() + ", write a guess between 1 and " + maxGuess.toString() + "!: ");
            
            Integer g = -1;
            Boolean success = false;
            do {
                g = input.nextInt();
                success = true;
                for(int j = 0; j < i; j++) {
                    if(g == this.playersList.get(j).getGuess()) {
                        System.out.print("This guess is already taken! Please try again: ");
                        success = false;
                    }
                }
                if ( success && (g < 1 || g > maxGuess) ) {
                    System.out.print("Your guess must be between 1 and " + maxGuess.toString() + "! Please try again: ");
                    success = false;
                }
            } while (!success);
            this.playersList.get(i).setGuess(g);                        
        }

        Random rng = new Random();
        Integer rightAnswer = rng.nextInt(maxGuess)+1;
        System.out.println("Right answer: " + rightAnswer.toString());
        for(Player p : this.playersList) {
            if(p.getGuess() == rightAnswer) {
                System.out.println("AND THE WINNER IS " + p.getNickName() + " !!!!");
            }
        }
    }
}
