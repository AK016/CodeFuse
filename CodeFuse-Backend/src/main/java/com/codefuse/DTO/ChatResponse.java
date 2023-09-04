package com.codefuse.DTO;

import java.util.List;

public class ChatResponse {

    private List<Choice> choices;

    public ChatResponse() {
        super();
    }

    public ChatResponse(List<Choice> choices) {
        super();
        this.choices = choices;
    }

    public List<Choice> getChoices() {
        return choices;
    }

    public void setChoices(List<Choice> choices) {
        this.choices = choices;
    }

    public static class Choice {

        private int index;
        private com.codefuse.DTO.Message message; // Specify the correct Message class here

        public Choice() {
            super();
        }

        public Choice(int index, com.codefuse.DTO.Message message) { 
            super();
            this.index = index;
            this.message = message;
        }

        public int getIndex() {
            return index;
        }

        public void setIndex(int index) {
            this.index = index;
        }

        public com.codefuse.DTO.Message getMessage() { 
            return message;
        }

        public void setMessage(com.codefuse.DTO.Message message) { 
            this.message = message;
        }
    }
}
