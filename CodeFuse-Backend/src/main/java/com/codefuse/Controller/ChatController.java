package com.codefuse.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.codefuse.DTO.ChatRequest;
import com.codefuse.DTO.ChatResponse;
import com.codefuse.config.NoResponseException;

@RestController
public class ChatController {
    
    @Qualifier("openaiRestTemplate")
    @Autowired
    private RestTemplate restTemplate;
    
    @Value("${openai.model}")
    private String model;
    
    @Value("${openai.api.url}")
    private String apiUrl;
    
    @GetMapping("/chat")
    public ResponseEntity<String> chat(@RequestParam String prompt) throws NoResponseException {
        // create a request
        ChatRequest request = new ChatRequest(model, prompt);
        // call the API
        ChatResponse response = restTemplate.postForObject(apiUrl, request, ChatResponse.class);
        
        if (response == null || response.getChoices() == null || response.getChoices().isEmpty()) {
        	throw new NoResponseException("No response");
        }
        
        
        
        // return the first response
        String content = response.getChoices().get(0).getMessage().getContent();
        return new ResponseEntity<String>(content, HttpStatus.OK);
    }
}
