package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import jakarta.servlet.annotation.WebServlet;
import java.util.Scanner;
import java.io.File;

import resources.Resources;

@WebServlet("/")
public class Hello extends HttpServlet {
    private static final long serialVersionUID = 1L;

	public Hello() {
		super();
	}

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
		try(Scanner file = new Scanner(new File(Resources.helloPage()))) {
			while(file.hasNextLine()) response.getWriter().println(file.nextLine());
		} catch(Exception e) {
			response.getWriter().println("Erro 500");
		}
    }
}
