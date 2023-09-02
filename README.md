# CodeFuse - Interview Taking Platform

(https://cdn.discordapp.com/attachments/1128079625818480751/1147595690738987108/Screenshot_2023-09-02_234404-removebg-preview.png)

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Running the Application](#running-the-application)
  - [Accessing the Frontend](#accessing-the-frontend)
  - [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Introduction

CodeFuse is an interview taking platform that leverages the power of OpenAI's GPT-3 for conducting interviews and providing responses. This platform allows interviewers to interact with candidates through a chat interface powered by ChatGPT, streamlining the interview process.

The frontend of CodeFuse is built using React and Tailwind CSS, providing a modern and responsive user interface. On the backend, we use Spring Boot and Java to handle requests, communicate with the OpenAI API, and manage interview data.

## Features

- Conduct interviews through a chat interface.
- Utilize OpenAI's GPT-3 for generating responses.
- User-friendly and responsive web-based frontend.
- Robust backend for managing interviews and data.

## Getting Started

### Prerequisites

Before getting started with CodeFuse, ensure you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org/) (for running the frontend)
- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-downloads.html) (for running the backend)
- [Spring Boot](https://spring.io/projects/spring-boot) (for the backend)
- [OpenAI API Key](https://beta.openai.com/signup/) (for connecting to the GPT-3 API)

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/codefuse.git
   ```

2. Navigate to the project directory:

   ```bash
   cd codefuse
   ```

3. Set up the frontend:

   ```bash
   cd frontend
   npm install
   ```

4. Set up the backend:

   ```bash
   cd ../backend
   # Replace 'your-api-key' with your actual OpenAI API Key
   echo "openai.api_key=your-api-key" > src/main/resources/application.properties
   ```

## Usage

### Running the Application

1. Start the backend server:

   ```bash
   cd backend
   ./mvnw spring-boot:run
   ```

2. Start the frontend development server:

   ```bash
   cd frontend
   npm start
   ```

### Accessing the Frontend

Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to access the CodeFuse frontend.

### API Documentation

For API documentation and endpoints, refer to the [API documentation](./API_DOCUMENTATION.md) file.

## Contributing

We welcome contributions from the community. If you'd like to contribute to CodeFuse, please review our [Contribution Guidelines](./CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
