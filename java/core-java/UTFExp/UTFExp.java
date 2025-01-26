import java.io.Serial;

class UTFExp {
    public static void main(String[] args) {
        String s1 = "Hello World!";
        String s2 = "𝕆 is the set of Octonions";

        System.out.println("First string: " + s1);
        System.out.println("Second string: " + s2);

        System.out.println("Length of s2: " + s2.length() + ", code units length 25");

        System.out.println("Code points length: " + s2.codePointCount(0, s2.length()));

        int index = s2.offsetByCodePoints(0, 3); //gives teh code-unit position of a i-th code point in a String, adjusting and correcting by special chars with 2 code units
        System.out.println("offsetByCodePoints: " + index);
        int codePoint = s2.codePointAt(index);
        System.out.println(Character.toString(codePoint));


        // easy way to navigate through a string with special characters:
        int[] s2CodePoints = s2.codePoints().toArray();

        for (int c : s2CodePoints) {
            System.out.print(Character.toString(c));            
        }
        System.out.println("");

    }
}