<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8">
    <title>Calculate sums</title>
  </head>
  <body>
	<form action="/hello/sum" method="get">
	  <input name="a" type="text" value="0.0"/>
	  <p>+</p>
	  <input name="b" type="text" value="0.0"/>
	  <input name="" type="submit" value="="/>
	</form>
	<p>
	<% Double a = 0.0;
	   Double b = 0.0;
	   try {a=Double.parseDouble(request.getParameter("a")} cach(Exception e) {a=0.0}
	   try {b=Double.parseDouble(request.getParameter("b"))} cach(Exception e) {b=0.0}
	   out.println(a+b);
	   %>
	</p>
  </body>
</html>
