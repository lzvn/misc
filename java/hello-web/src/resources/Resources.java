package resources;

public class Resources {
	private static final String publicFolder = "/home/r2d2/Documents/prg/java/hello-web/src-web/public/";
	public Resources() {
	}

	public static String helloPage() {
		return publicFolder+"hello.html";
	}

	public static String sumPage() {
		return publicFolder+"sum.html";
	}
}
