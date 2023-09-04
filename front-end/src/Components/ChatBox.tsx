import React, { useState, useRef, useEffect } from 'react'
import { FaGgCircle, FaUserGraduate, FaRegEdit, FaRegWindowClose, FaPlay } from "react-icons/fa";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import picture from "../images/interview.jpg"

const prompts: string[] = [
    "I want you to act as an interviewer. I will be the candidate and you will ask me the interview questions for the position of Frontend Software Developer. That will require me to have the following content: HTML, CSS, JS, React, Redux, Typescript.I want you to only reply as the interviewer. Ask me the questions and wait for my answers. Ask one question at a time.Ask me the questions individually like an interviewer and wait for my answers.Continue the process until I ask you to stop.And, you will stop the interview when I tell you to stop using the phrase “stop the interview”. After that, you would provide me feedback ```when I ask you using the phrase, “share your feedback”.The cumulative feedback generated at the end should be evaluated using the following rubrics. While grading my responses you have to very strict like a real interviewer. 1.Subject Matter Expertise 2.Communication skills 3. Problem Solving skills 4.Hiring criteria : Options are Reject, Waitlist, Hire and Strong Hire. Feedback for Subject Matter Expertise and Communication skills should contain ratings on my interview responses from 0 - 10. Some examples questions you can ask:1.what is props drilling? 2.What is useEffect?. So without any further delay `start the interview` with your first question ",
    "I want you to act as an interviewer. I will be the candidate and you will ask me the interview questions for the position of Node backend Software Developer. That will require me to have the following content: Express.js, Nodejs, MongoDB, javascript.I want you to only reply as the interviewer. Ask me the questions and wait for my answers. Ask one question at a time.Ask me the questions individually like an interviewer and wait for my answers.Continue the process until I ask you to stop.And, you will stop the interview when I tell you to stop using the phrase “stop the interview”. After that, you would provide me feedback ```when I ask you using the phrase, “share your feedback”.The cumulative feedback generated at the end should be evaluated using the following rubrics. While grading my responses you have to very strict like a real interviewer. 1.Subject Matter Expertise 2.Communication skills 3. Problem Solving skills 4.Hiring criteria : Options are Reject, Waitlist, Hire and Strong Hire. Feedback for Subject Matter Expertise and Communication skills should contain ratings on my interview responses from 0 - 10.Some examples questions you can ask:1.what is middlewares in express.js? 2.What is a server? So without any further delay `start the interview` with your first question ",
    "I want you to act as an interviewer. I will be the candidate and you will ask me the interview questions for the position of backend Software Developer.That will require me to have the following content:- Disadvantages of JDBC, Advantages of JPA over JDBC ,Entity Life Cycle,How to perform CRUD (Create, Read, Update & Delete) operation in hibernate, Granularity Mismatch, Inheritance Mapping,Association Mapping  .I want you to only reply as the interviewer. Ask me the questions and wait for my answers. Ask one question at a time.Ask me the questions individually like an interviewer and wait for my answers.Continue the process until I ask you to stop.And, you will stop the interview when I tell you to stop using the phrase “stop the interview”. After that, you would provide me feedback ```when I ask you using the phrase, “share your feedback”.The cumulative feedback generated at the end should be evaluated using the following rubrics. While grading my responses you have to very strict like a real interviewer. 1.Subject Matter Expertise 2.Communication skills 3. Problem Solving skills 4.Hiring criteria : Options are Reject, Waitlist, Hire and Strong Hire. Feedback for Subject Matter Expertise and Communication skills should contain ratings on my interview responses from 0 - 10.So without any further delay `start the interview` with your first question ",
]

export const ChatBox = () => {

    const inputRef = useRef<HTMLInputElement | null>(null);
    const [response, setResponse] = useState<boolean>(false);
    const [end, setEnd] = useState<boolean>(false);
    const [startBtn, setStart] = useState(false);
    const [disbleSend, setDisaleSend] = useState(false);
    const { id } = useParams()
    let myId = Number(id)
    const navigate = useNavigate()

    const handleFeedback = () => {
        setMessage("share your feedback")
        sendMessage()
        setEnd(true)
    }

    const handleEnd = () => {
        startNewConversation();
        setEnd(false);
        navigate("/");
    }

    const [message, setMessage] = useState<string>(prompts[myId]);
    const [conversation, setConversation] = useState<string[]>([]);

    const sendMessage = async () => {
        if (message) {
            setDisaleSend(true)
            setResponse(true)
            let msg = message
            setMessage('');
            setConversation([...conversation, msg])
            try {
                const response = await axios.get('https://codefuse-production.up.railway.app/chat', {
                    params: {
                        prompt: msg,
                    },
                });
                setConversation(response.data);
                console.log(response.data);
                // setMessage('');
            } catch (error) {
                console.error('Error sending message:', error);
            }
            setResponse(false)
            setDisaleSend(false)
        } else {
            inputRef.current?.focus();
        }

    };

    const startNewConversation = async () => {
        try {
            await axios.get('https://codefuse-production.up.railway.app/startNewConversation');
            setConversation([]); // Clear the conversation history
        } catch (error) {
            console.error('Error starting a new conversation:', error);
        }
    };


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

    const handleStart = () => {
        startNewConversation()
        sendMessage()
        setStart(true)
    }


    if (startBtn == false) {
        return (
            <div className='h-1/2 p-5 flex flex-row justify-center items-center' >
                <div className='w-1/4 h-80 relative mr-20'>
                    <img src={picture} alt="" className='h-full object-cover rounded-lg' />
                    <div className=" inset-0 bg-white opacity-50 rounded-lg"></div>
                </div>
                <button className='mt-5 flex justify-start items-center bg-gray-200 p-3 text-gray-700 font-medium rounded-lg hover:bg-gray-300' onClick={handleStart}>Start Interview Now</button>
            </div>
        )
    }


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
                    conversation?.map((message, index) => (
                        index % 2 !== 0 ?
                            <div key={index} className="flex mb-2 justify-start max-w-[75%]">
                                <div className="flex bg-yellow-100 rounded-lg p-2 px-5">
                                    <div className='mt-1'>
                                        <FaGgCircle size={"25px"} color='gray' />
                                    </div>
                                    <p className='text-left text-gray-600 font-bold-md ml-3 text-md' dangerouslySetInnerHTML={{ __html: message.replace('\n', '<br />') }}></p>
                                    {/* <p className='text-left text-gray-600 font-bold-md ml-3 text-md'>{message}</p> */}
                                </div>
                            </div>
                            :
                            index !== 0 ?
                                <div key={index} className="flex mb-2  justify-end">
                                    <div className="flex bg-gray-100 max-w-[75%] rounded-lg p-2 right-0 px-5 justify-end ">
                                        <p className='text-gray-600 font-bold-lg mr-5 text-md text-justify' dangerouslySetInnerHTML={{ __html: message.replace('\n', '<br />') }}></p>
                                        {/* <p className='text-gray-600 font-bold-lg mr-5 text-md text-justify'>{message}</p> */}
                                        <div className='mt-1'>
                                            <FaUserGraduate size={"20px"} className='m-1' />
                                        </div>
                                    </div>
                                </div> : ""
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
                    <button className={`flex items-center bg-green-200 p-3 text-gray-700 font-medium rounded-lg hover:bg-gray-200 ${disbleSend ? 'cursor-not-allowed' : ''}`}
                        onClick={sendMessage} disabled={disbleSend}
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
                <button disabled={!end} className={`flex items-center bg-white p-3 text-red-700 font-medium rounded-lg hover:bg-gray-200 ${!end ? 'cursor-not-allowed' : ''}`} onClick={handleEnd}>
                    <FaRegWindowClose size={"20px"} className='m-1' />
                    END INTERVIEW
                </button>
            </div>
        </div >
    )
}




