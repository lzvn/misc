package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Scanner;
import java.io.File;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import jakarta.servlet.annotation.WebServlet;

import resources.Resources;
import utils.InputTag;

@WebServlet("/sum")
public class Sum extends HttpServlet {
    private static final long serialVersionUID = 1L;
	
	private final String resultTag = "<result>";

	public Sum() {
		super();
	}

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();

		Double a = safeStr2Double(request.getParameter("a"));
		Double b = safeStr2Double(request.getParameter("b"));
	   
		try(Scanner file = new Scanner(new File(Resources.sumPage()))) {  
			while(file.hasNextLine()) {
				String line = file.nextLine();

				if(line.contains(resultTag)) {
					Double result = a+b;
					line="<result>"+result+"</result>";
				} else if(line.contains("input")) {
					InputTag input = InputTag.fromHTMLLine(line);
					//System.out.println(line);
					if(!input.type.equals("submit")) input.value=""+safeStr2Double(request.getParameter(input.name));
					line = input.toString();
				}

				out.println(line);
			}
		} catch(Exception e) {
			out.println("Error: ");
			out.println(e.getMessage());
		}
		
    }

	private Double safeStr2Double(String num_str) {
		Double num = 0.0;

		try {
			num = Double.parseDouble(num_str);
		} catch(RuntimeException e) {
			num = 0.0;
		} catch(Exception e) {
			num = 0.0;
		} finally {
			return num;
		}
	}
}
