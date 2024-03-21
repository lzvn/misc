package player;

public class Player {
    private Integer guess;
    private String nickname;

    public Player() {
        this.nickname = "player";
        guess = 0;
    }
    public Player(String nickname) {
        this.guess = 0;
        this.nickname = nickname;
    }
    public Player(Integer guess) {
        this.guess = guess;
    }

    public void setGuess(Integer guess) {
        this.guess = guess;
    }

    public Integer getGuess() {
        return this.guess;
    }

    public String getNickName() {
        return this.nickname;
    }

}