package com.codefuse.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.codefuse.DTO.ChatRequest;
import com.codefuse.DTO.ChatResponse;
import com.codefuse.config.NoResponseException;

@RestController
@CrossOrigin(origins = "*")
public class ChatController {
    
    @Qualifier("openaiRestTemplate")
    @Autowired
    private RestTemplate restTemplate;
    
    @Value("${openai.model}")
    private String model;
    
    @Value("${openai.api.url}")
    private String apiUrl;

    // Define a List to store conversation history
    private List<String> conversationHistory = new ArrayList<>();
    
    @GetMapping("/chat")
    public ResponseEntity<List<String>> chat(@RequestParam String prompt) throws NoResponseException {
        // Add user's message to the conversation history
        conversationHistory.add(prompt);

        // create a request
        ChatRequest request = new ChatRequest(model, String.join("\n", conversationHistory));
        // call the API
        ChatResponse response = restTemplate.postForObject(apiUrl, request, ChatResponse.class);
        
        if (response == null || response.getChoices() == null || response.getChoices().isEmpty()) {
        	throw new NoResponseException("No response");
        }
        
        // Extract chatbot's reply
        String content = response.getChoices().get(0).getMessage().getContent();
        conversationHistory.add(content);

        return new ResponseEntity<>(conversationHistory, HttpStatus.OK);
    }

    // Add a new endpoint to start a new conversation
    @GetMapping("/startNewConversation")
    public ResponseEntity<String> startNewConversation() {
        // Clear the conversation history
        conversationHistory.clear();
        return new ResponseEntity<>("New conversation started.", HttpStatus.OK);
    }
}
