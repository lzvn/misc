import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexTest {
	public static void main(String[] args) {
		String text = "<input name=\"a\" type=\"text\" value=\"0.0\"/>";
		Pattern pattern = Pattern.compile("(name=\".\")");
		Matcher matches = pattern.matcher(text);
		try {
			if(matches.find()) {
				String match = matches.group(1);
				String name = match.split("=")[1];
				name=name.substring(1,name.length()-1);
				System.out.println(name);
			}
		} catch(Exception e) {
		}
	}
}
