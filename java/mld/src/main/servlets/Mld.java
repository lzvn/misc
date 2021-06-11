package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import jakarta.servlet.annotation.WebServlet;


import resources.Resources;

import db.dao.*;
import model.entities.*;
import java.util.List;

@WebServlet("/")
public class Mld extends HttpServlet {
    private static final long serialVersionUID = 1L;

	public Mld() {
		super();
	}

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			String resource = "";
			if(request.getRequestURI().contains(".css")) {
				response.setContentType(request.getContentType());
				resource = Resources.getCss();
			} else if(request.getRequestURI().contains(".js")) {
				response.setContentType(request.getContentType());
				resource = Resources.getJs();
			} else {
				response.setContentType("text/html;charset=UTF-8");
				resource = Resources.getMainPage();
			}
			response.getWriter().println(resource);
		} catch(Exception e) {
			response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			response.getWriter().println(Resources.getErrorPage());
		}
    }
}
