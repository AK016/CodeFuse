package com.codefuse;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CodeFuseBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(CodeFuseBackendApplication.class, args);
	}
	public void init() {
		System.out.println();
		System.out.println("Inside Innit");
		System.out.println();
	}

}
