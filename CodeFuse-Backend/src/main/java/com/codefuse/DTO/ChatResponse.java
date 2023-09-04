package com.codefuse.DTO;

import java.util.List;

import lombok.Data;

@Data
public class ChatResponse {

	private List<Choice> choices;

}
