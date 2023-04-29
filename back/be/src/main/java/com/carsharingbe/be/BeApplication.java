package com.carsharingbe.be;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"com.carsharingbe.be.controller","com.carsharingbe.be.repository","com.carsharingbe.be.model","com.carsharingbe.be.service", "com.carsharingbe.be"})
public class BeApplication {

	public static void main(String[] args) {
		SpringApplication.run(BeApplication.class, args);
	}

}
