package resources;

import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import java.util.Scanner;
import java.io.File;
import java.text.SimpleDateFormat;

import java.io.IOException;

import resources.enums.MimeType;

import db.dao.*;
import model.entities.*;
import java.util.List;

public class Resources {
	private static final String publicFolder = "/home/r2d2/Documents/dev/mld/src-web/public/";
	private static final String topBarTag = "<TopBar />";
	private static final String searchResultsTag = "<SearchResults />";
	private static String topBar = null;
	private static String css = null;
	private static String js = null;

	public static String getMainPage() throws Exception {
		String page = "";
		try( Scanner file = new Scanner(new File(publicFolder+"index.html")) ) {
			while(file.hasNextLine()) {
				String line = file.nextLine();
				if(line.contains(topBarTag)) {
					line = getTopBar();
				}
				page+=line;
			}
		}
		return page;
	}

	public static String getCss() throws Exception {
		if(css==null) css=getFullResource(MimeType.CSS);
		return css;
	}

	public static String getJs() throws Exception {
		if(js==null) js=getFullResource(MimeType.JS);
		return js;
	}
	//TODO: there must be a drier way of doing this
	public static String getSearchPage(String param, String queried) throws Exception {

		if(param == null || queried == null)
			throw new Exception("Null parameter or query item in search");

		String path = publicFolder+"search.html";
		String page = "";
		try( Scanner file = new Scanner(new File(path)) ) {
			while(file.hasNextLine()) {
				String line = file.nextLine();
				if(line.contains(topBarTag)) {
					line=getTopBar();
				}
				if(line.contains(searchResultsTag)) {
					line = "";
					MovieDao movieDao = DaoFactory.makeMovieDao();
					List<Movie> movies = movieDao.searchBy(param, queried.toLowerCase());

					if (movies.size() > 0) {
						for(Movie movie : movies)
							line+=movieToTableRow(movie);
					} else {
						line+="<tr><td>" + "No movie found" + "</td><td></td></tr>\n";
					}
				}
				page+=line;
			}
		}
		return page;
	}

	public static String getErrorPage(){
		String page = "";
		page+="<h1>ERROR 500</h1>";
		page+="<p>Sorry, a problem occuried in our servers. We are already dealing with this situation and we will soon be back!</p>";
		page+="<p>I promise you!</p>";
		return page;
	}

	private static String getTopBar() throws Exception {
		if(topBar==null) {
			topBar="";
			try(Scanner file = new Scanner(new File(publicFolder + "topbar.html"))) {
				while(file.hasNextLine()) topBar+=file.nextLine();
			}
		}
		return topBar;
	}

	private static String getFullResource(MimeType type) throws Exception {
		String path = publicFolder;
		String page = "";
		switch(type) {
			case CSS:
				path+="style.css";
				break;
			case JS:
				path+="script.js";
				break;
			default:
				path+="index.html";
		}

		try(Scanner file = new Scanner(new File(path))) {
			while(file.hasNextLine()) page+=file.nextLine();
		}
		return page;
	}
	
    private static String movieToTableRow(Movie movie) {
        //TODO: use StringBuilder might be better
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        String msg = "<tr>";
            for(int i = 0; i < 6; i++) {
                msg+="<td>";
                switch (i) {
                    case 0:
                        msg += movie.getTitle();
                        break;
                    case 1:
                        msg += movie.getDirector().getName();
                        break;
                    case 2:

                        int end = movie.getGenres().size()>3?3:movie.getGenres().size();

                        for(int j = 0; j < end; j++) {
                            msg+=movie.getGenres().get(j);
                            if(j<end-1)
                                msg+=", ";
                        }
                        break;
                    case 3:
                        msg += movie.getDuration();
                        break;
                    case 4:
                        msg += sdf.format(movie.getReleaseDate());
                        break;
                    case 5:
                        msg += movie.getSynopsis();
                        break;
                }
                msg+="</td>";
            }
            msg+="</tr>";
            return msg;
    }	
}
