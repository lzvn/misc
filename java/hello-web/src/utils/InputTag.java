package utils;

import java.util.regex.Pattern;
import java.util.regex.Matcher;
import java.util.InputMismatchException;



public class InputTag {

	//encapsulation whatever
	public String name;
	public String type;
	public String value;
	
	public InputTag() {
		
	}

	//PS: the correct would be to have type as an enum, but I'm doing it
	public InputTag(String name, String type, String value) {
		this.name = name;
		this.type = type;
		this.value = value;
	}

	//I should be using a library for this, but whatever
	public static InputTag fromHTMLLine(String htmlLine) {
		String[] props = new String[]{"name", "type", "value"};
		String newName = "";
		String newType = "";
		String newValue = "";
		
		try {
			Pattern pattern = Pattern.compile("(w*=\".*\")");
			Matcher innerTag = pattern.matcher(htmlLine);
			
			if(innerTag.find()) {
				String[] matches = innerTag.group(1).split(" ");
				int propIndex = 0;
				for(String match : matches) {
					String prop = props[propIndex];
					propIndex++;
					
					int index = match.indexOf("\"");
					match = match.substring(index+1, match.length()-1);
					
					//TODO: there must be a better way of doing this
					if(prop.equals("name")) {
						newName = match;
					} else if(prop.equals("type")) {
						newType = match;
					} else if(prop.equals("value")) {
						newValue = match;
					} else {
						throw new Exception("Unknown property");
					}
				}
			}
		} catch(Exception e) {
			System.out.println(e.getMessage());
			e.printStackTrace();
		}

		return new InputTag(newName, newType, newValue);
	}

	@Override
	public String toString() {
		return "<input name=\""+name+"\" type=\""+type+"\" value=\""+value+"\"/>";
	}

	
}
