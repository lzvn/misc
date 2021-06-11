package servlets;


import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.File;
import java.io.IOException;
import java.util.Locale;
import java.util.Scanner;

import resources.Resources;
import resources.enums.MimeType;

@WebServlet("/search")
public class Search extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public Search() {
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try{
			response.setContentType("text/html;charset=UTF-8");
			response.getWriter().println(Resources.getSearchPage(request.getParameter("param"), request.getParameter("q")));
		} catch(Exception e) {
			//TODO: do an actual error response
			response.getWriter().println("Error 500");
		}
    }
}
