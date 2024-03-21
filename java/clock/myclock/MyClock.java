package myclock;

import java.util.Calendar;
import java.util.Date;
import java.time.LocalTime;

public class MyClock {
    public static void main(String[] args) throws InterruptedException {
        
        clearScreen();
        while (true) {          
            System.out.println(LocalTime.now().toString().substring(0, 8));
            Thread.sleep(1000);
            clearScreen();
        }
    }

    public static void clearScreen() {
        System.out.print("\033[H\033[2J");  
        System.out.flush(); 
    }
}