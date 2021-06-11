package com.example.restservice;


import java.util.concurrent.atomic.AtomicLong;
import java.util.Scanner;
import java.io.File;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


//@SprintBootApplication
@RestController
public class GreetingController{
	private static final String template = "Hello, %s";
	private final AtomicLong counter = new AtomicLong();

	@GetMapping("/example") 
	public String example() {
		String page = "";
		String path = "/home/r2d2/Documents/prg/java/rest-service/public/example.html";
		try(Scanner file = new Scanner(new File(path))) {
			while(file.hasNextLine()) {
				page+=file.nextLine();
			}
		} catch(Exception e) {
			e.printStackTrace();
		}
		return page;
	}

	@GetMapping("/example/greeting")
	public Greeting greeting(@RequestParam(value="name", defaultValue="World") String name) {
		return new Greeting(counter.incrementAndGet(), String.format(template, name));
	}
}
