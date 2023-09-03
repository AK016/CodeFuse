import React, { useState, useRef, useEffect } from 'react'
import { FaGgCircle, FaUserGraduate, FaRegEdit, FaRegWindowClose, FaPlay } from "react-icons/fa";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const prompts: string[] = [
    "I want you to act as an interviewer. I will be the candidate and you will ask me the interview questions for the position of Frontend Software Developer.That will require me to have the following content: HTML, CSS, JS, React, Redux, Typescript.I want you to only reply as the interviewer. Ask me the questions and wait for my answers. Ask one question at a time.Ask me the questions individually like an interviewer and wait for my answers.Continue the process until I ask you to stop.And, you will stop the interview when I tell you to stop using the phrase “stop the interview”. After that, you would provide me feedback ```when I ask you using the phrase, “share your feedback”.The cumulative feedback generated at the end should be evaluated using the following rubrics. While grading my responses you have to very strict like a real interviewer. 1.Subject Matter Expertise 2.Communication skills 3. Problem Solving skills 4.Hiring criteria : Options are Reject, Waitlist, Hire and Strong Hire. Feedback for Subject Matter Expertise and Communication skills should contain ratings on my interview responses from 0 - 10.So without any further delay `start the interview` with your first question ",
    "I want you to act as an interviewer. I will be the candidate and you will ask me the interview questions for the position of Node backend Software Developer.That will require me to have the following content: Express, Nodejs, MongoDB, javascript.I want you to only reply as the interviewer. Ask me the questions and wait for my answers. Ask one question at a time.Ask me the questions individually like an interviewer and wait for my answers.Continue the process until I ask you to stop.And, you will stop the interview when I tell you to stop using the phrase “stop the interview”. After that, you would provide me feedback ```when I ask you using the phrase, “share your feedback”.The cumulative feedback generated at the end should be evaluated using the following rubrics. While grading my responses you have to very strict like a real interviewer. 1.Subject Matter Expertise 2.Communication skills 3. Problem Solving skills 4.Hiring criteria : Options are Reject, Waitlist, Hire and Strong Hire. Feedback for Subject Matter Expertise and Communication skills should contain ratings on my interview responses from 0 - 10.So without any further delay `start the interview` with your first question ",
    "I want you to act as an interviewer. I will be the candidate and you will ask me the interview questions for the position of backend Software Developer.That will require me to have the following content:- Disadvantages of JDBC, Advantages of JPA over JDBC ,Entity Life Cycle,How to perform CRUD (Create, Read, Update & Delete) operation in hibernate, Granularity Mismatch, Inheritance Mapping,Association Mapping  .I want you to only reply as the interviewer. Ask me the questions and wait for my answers. Ask one question at a time.Ask me the questions individually like an interviewer and wait for my answers.Continue the process until I ask you to stop.And, you will stop the interview when I tell you to stop using the phrase “stop the interview”. After that, you would provide me feedback ```when I ask you using the phrase, “share your feedback”.The cumulative feedback generated at the end should be evaluated using the following rubrics. While grading my responses you have to very strict like a real interviewer. 1.Subject Matter Expertise 2.Communication skills 3. Problem Solving skills 4.Hiring criteria : Options are Reject, Waitlist, Hire and Strong Hire. Feedback for Subject Matter Expertise and Communication skills should contain ratings on my interview responses from 0 - 10.So without any further delay `start the interview` with your first question ",

    //"I want you to act as an interviewer. I will be the candidate and you will ask me the interview questions for the position of Node backend Software Developer.That will require me to have the following content: Express, Nodejs, MongoDB, javascript.I want you to only reply as the interviewer. Do not write all the conservation at once. I want you to only do the technical interview with me on coding. Ask me the questions and wait for my answers. I will say the phrase “start the interview” for you to start. Ask one question at a time  if I am not able to answer satisfactorily, give me feedback in this framework: ####D: Definition U: Usecase B: Benefit X: Extra Information##### {<Ask me the questions individually like an interviewer and wait for my answers.>} Questions can include both new questions and follow up questions from the previous questions. Continue the process until I ask you to stop.  And, you will stop the interview when I tell you to stop using the phrase “stop the interview”. After that, you would provide me feedback ```when I ask you using the phrase, “share your feedback”.The cumulative feedback generated at the end should be evaluated using the following rubrics. While grading my responses you have to very strict like a real interviewer. 1.Subject Matter Expertise 2.Communication skills 3. Problem Solving skills 4.Hiring criteria : Options are Reject, Waitlist, Hire and Strong Hire. Feedback for Subject Matter Expertise and Communication skills should contain ratings on my interview responses from 0 - 10. Some Example questions: 1.What is npm? 2.What is middleware and why is it used?  3.Explain the concept of modules in express.js 4.What is the significance of the package.json file? 5.What is RESTful API? These questions are sample question they need not to be included in actual questions. So without any further delay `start the interview` with your first question ",
    //"I want you to act as an interviewer. I will be the candidate and you will ask me the interview questions for the position of backend Software Developer.That will require me to have the following content - Disadvantages of JDBC - Advantages of JPA over JDBC - Entity Life Cycle - How to perform CRUD (Create, Read, Update & Delete) operation in hibernate - Granularity Mismatch - Inheritance Mapping - Association Mapping . #### I want you to only reply as the interviewer. Do not write all the conservation at once. I want you to only do the coding technical interview with me. Ask me the questions and wait for my answers. I will say the phrase “start the interview” for you to start. Ask one question at a time  if I am not able to answer satisfactorily, give me feedback in this framework: #### REACTO: R: Repeat (Repeating the question in your own word) E: Examples (Give some examples to clear out the meaning) and edge cases A: Approach (Discussing the approach to solve the question) C: Code (Writing the code with proper indentation, commenting and proper coding format) T: Testing the code (With some own test cases) O: Optimise (Use optimisation to optimise the already present code) And rate my each answer from 0-10 on the following parameter 1.Subject Matter Expertise 2.Communication skills 3. Problem solving skills ##### Follow the above REACTO framework strictly. {<Ask me the questions individually like an interviewer and wait for my answers.>} Questions can include both new questions and follow up questions from the previous questions. Continue the process until I ask you to stop.  And, you will stop the interview when I tell you to stop using the phrase “stop the interview”. After that, you would provide me feedback when I ask you using the phrase, “share your feedback”. The feedback should be evaluated using the following rubrics 1.Subject Matter Expertise 2.Communication skills 3.Hiring criteria : Options are Reject, Waitlist, Hire and Strong Hire 4. Problem Solving skills Feedback for Subject Matter Expertise and Communication skills should contain ratings on my interview responses from 0 - 10 Some Example questions: 1. Create a todo app 2. Explain useState and useEffect through code 3. How to debug this piece of code. So without any further delay `start the interview`with your first question.",
]

export const ChatBox = () => {

    const inputRef = useRef<HTMLInputElement | null>(null);
    const [response, setResponse] = useState<boolean>(true);
    const { id } = useParams()
    let myId = Number(id)

    const handleFeedback = () => {
        setMessage("share your feedback")
        // setConversation([...conversation, message])
        // sendMessage()
    }

    const handleEnd = () => {
        setMessage("end the interview")
        startNewConversation()
    }

    const [message, setMessage] = useState<string>(prompts[myId]);
    const [conversation, setConversation] = useState<string[]>([]);

    const sendMessage = async () => {
        try {
            const response = await axios.get('/chat', {
                params: {
                    prompt: message,
                },
            });
            setConversation(response.data);
            console.log(response.data);
            setMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
        setResponse(false)
    };


    // useEffect(() => {
    //     sendMessage()
    // }, [])

    const startNewConversation = async () => {
        try {
            await axios.get('/startNewConversation');
            setConversation([]); // Clear the conversation history
        } catch (error) {
            console.error('Error starting a new conversation:', error);
        }
    };

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (message) {
            sendMessage()
            setResponse(true)
            setMessage("")
        } else {
            inputRef.current?.focus();
        }
    }

    const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (message) {
            sendMessage();
            setResponse(true);
            setMessage("");
        } else {
            inputRef.current?.focus();
        }
    };



    return (
        <div className='h-screen rounded-md my-10 m-5 px-10 w-auto m-auto'>

            <div className='bg-gray-600 rounded-md p-3 text-purple-700 font-bold text-lg'>
                <h1 className='text-white'>{myId == 0 ? "MERN" : myId == 1 ? "NodeJs" : "Java"}</h1>
            </div>


            <div className="h-96 overflow-y-scroll border rounded-lg p-4">
                <div className="flex mb-2 justify-start">
                    <div className="flex bg-yellow-100 rounded-lg p-2 px-5 items-center">
                        <div className='mt-1'>
                            <FaGgCircle size={"25px"} color='gray' />
                        </div>
                        <p className='text-left text-gray-600 font-bold-md ml-3 text-md'>Welcome to CodeFuse !!! </p>
                    </div>
                </div>
                {
                    conversation.map((message, index) => (
                        index % 2 !== 0 ?
                            <div key={index} className="flex mb-2 justify-start">
                                <div className="flex bg-yellow-100 rounded-lg p-2  px-5">
                                    <div className='mt-1'>
                                        <FaGgCircle size={"25px"} color='gray' />
                                    </div>
                                    <p className='text-left text-gray-600 font-bold-md ml-3 text-md'>{message}</p>
                                </div>
                            </div>
                            :
                            <div key={index} className="flex mb-2 justify-end">
                                <div className="flex bg-gray-100 rounded-lg p-2  px-5 justify-end ">
                                    <p className='text-gray-600 font-bold-lg mr-5 text-md text-justify'>{message}</p>
                                    <div className='mt-1'>
                                        <FaUserGraduate size={"20px"} className='m-1' />
                                    </div>
                                </div>
                            </div>
                    ))
                }
                {response ?
                    <div className="flex mb-2 justify-start">
                        <div className="flex bg-yellow-100 rounded-lg p-2  px-5 items-center">
                            <div className='mt-1'>
                                <FaGgCircle size={"25px"} color='gray' />
                            </div>
                            <p className='text-left text-gray-600 font-bold-md ml-3 text-lg '>Typing...</p>
                        </div>
                    </div>
                    : ""}
            </div>


            <div className='flex justify-between my-5' >
                <div className='w-4/5'>
                    <input className="w-full h-12 px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:border-blue-500"
                        placeholder="Enter your text here..."
                        ref={inputRef}
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <div>
                    <button className='flex items-center bg-green-200 p-3 text-gray-700 font-medium rounded-lg hover:bg-gray-200'
                        onClick={sendMessage}
                    >
                        <FaPlay size={"20px"} className='m-1' />
                    </button>
                </div>
            </div>

            <div className='flex bg-yellow-100 rounded-md m-5 p-10 m-auto gap-10 justify-center'>

                <button className='flex items-center bg-white p-3 text-gray-700 font-medium rounded-lg hover:bg-gray-200' onClick={handleFeedback} >
                    <FaRegEdit size={"20px"} className='m-1' />
                    GENERATE FEEDBACK
                </button>
                <button className='flex items-center bg-white p-3 text-red-700 font-medium rounded-lg hover:bg-gray-200' onClick={handleEnd}>
                    <FaRegWindowClose size={"20px"} className='m-1' />
                    END INTERVIEW
                </button>
            </div>
        </div >
    )
}




