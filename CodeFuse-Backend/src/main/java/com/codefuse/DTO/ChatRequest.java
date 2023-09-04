package com.codefuse.DTO;

import java.util.ArrayList;
import java.util.List;

import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
public class ChatRequest {

	private String model;
	private List<Message> messages= new ArrayList<>();


	public ChatRequest(String model, String prompt) {
		this.model = model;
		this.messages.add(new Message("user", prompt));
	}
}
