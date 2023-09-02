import React, { useState, useRef, useEffect } from 'react'
import { FaGgCircle, FaUserGraduate, FaRegEdit, FaRegWindowClose, FaPlay } from "react-icons/fa";

const data =
{
    "model": "gpt-3.5-turbo",
    "messages": [
        {
            "role": "user",
            // "content": "I want you to act as an expert frontend software developer. You are asked to take my technical interview for the position of frontend software developer as a fresher and share your feedback.  In my new job I will be building web apps which will require for me to have knowledge of the concepts provided below. When you start taking interview, then #### start asking questions without giving answer which shall compulsory be based on the knowledge required for this position. #### I will say the phrase “start the interview” for you to start. Ask one question at a time ####give me feedback in this framework in no more than 50 words####: DUBX:  D - Definition (it should include the key technical terms)  U - Use Cases  B - Benefits  X - Extra Information   Definition: Object is a data type that stores data in the form of key-value pairs. It also allows actions to be performed on this data using methods.  Use Cases: It is used whenever you have unordered data which has to be fetched using a property name.  Example use cases:  - Amazon_User: keys are name, age, gender, address, orders, payment_method   - Product: name, price, rating, reviews, inventory  Benefits: Unlike Arrays, with Objects you don't need to search information in the whole array. You can fetch the required value simply from its key.  Extra Information: Objects can also capture the entity's behavior using Object methods. Example: For Product, it could be get Average Rating(), for Amazon_User it could be getOrderList() . ####  Then, ask another question after I provide the answer.After my answer just switch to the next question. And, you will stop the interview when I tell you to stop using the phrase “stop the interview”.  After that, you would provide me feedback when I ask you using the phrase, “share your feedback”.  The feedback should be evaluated using the following rubrics 1.Subject Matter Expertise 2.Communication skills 3.Hiring criteria : Options are Reject, Waitlist, Hire and Strong Hire Feedback for Subject Matter Expertise and Communication skills should contain ratings on my interview responses from 0 - 10. These are the questions that you have to ask to me. 1-What is virtual DOM in react? 2-What are custome hooks? Explain with example. 3-What is the difference between useState and useEffect? 4-How dose an event loop work? So ask me this question one by one. And Let's start the interview."
            "content": "I want you to act as an expert frontend software developer. You are asked to take my technical interview for the position of frontend software developer and share your feedback.  In my new job I will be building web apps which will require for me to have knowledge of the concepts provided below. When I ask you to start taking interview, then #### start asking questions without giving answer which shall compulsory be based on the knowledge required for this position. ####    #### Concepts: \"- Virtual DOM - JSX, Rules of JSX - Babel - Javascript in JSX - Components - Props - Events - Conditional rendering - useState Hook - List and Keys - useRef Introduction, applications - Difference between useRef and useState - Form Management - State updation and State upliftment revision - Props drilling - Content API - Intro and Usage - Building some applications using context API - useReducer hook \"####   #### Some example of the questions that can be asked are: { - What is an  vDOM? - What is JSX? Can browser understand JSX? } ####  These questions are for understanding question type but actual question can be different. I will say the phrase “start the interview” for you to start. Ask one question at a time  if I am not able to answer satisfactorily, ####give me feedback in this framework in no more than 50 words####: DUBX:  D - Definition (it should include the key technical terms)  U - Use Cases  B - Benefits  X - Extra Information  #### An example to explain the concept \"Objects\" in javascript you would use it like this:  Definition: Object is a data type that stores data in the form of key-value pairs. It also allows actions to be performed on this data using methods.  Use Cases: It is used whenever you have unordered data which has to be fetched using a property name.  Example use cases:  - Amazon_User: keys are name, age, gender, address, orders, payment_method   - Product: name, price, rating, reviews, inventory  Benefits: Unlike Arrays, with Objects you don't need to search information in the whole array. You can fetch the required value simply from its key.  Extra Information: Objects can also capture the entity's behavior using Object methods. Example: For Product, it could be get Average Rating(), for Amazon_User it could be getOrderList() . ####  Then, ask another question after I provide the answer.After my answer , just switch to the next question with any explaination. An example of follow-up question would be: ####First question: What is the CSS box-sizing property and how does it work? Follow-up question: Can you explain a scenario where using the box-sizing property with the value border-box would be beneficial? ####  Continue the process until I ask you to stop.   And, you will stop the interview when I tell you to stop using the phrase “stop the interview”.  After that, you would provide me feedback when I ask you using the phrase, “share your feedback”.  The feedback should be evaluated using the following rubrics 1.Subject Matter Expertise 2.Communication skills 3.Hiring criteria : Options are Reject, Waitlist, Hire and Strong Hire Feedback for Subject Matter Expertise and Communication skills should contain ratings on my interview responses from 0 - 10 So start the interview."
        }
    ]
}


interface Message {
    role: string;
    content: string;
}

interface Chat {
    model: string;
    messages: Message[];
}

const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = "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";


export const ChatBox = () => {

    const [messages, setMessage] = useState<Message[]>(data.messages)
    const [userMsg, setUserMsg] = useState<string>("")
    const [allMessages, setAllMessages] = useState<Message[]>(data.messages);
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const [response, setResponse] = useState<boolean>(true)

    const handleFeedback = () => {
        let userMessageArr = [...messages, { role: "user", content: "share your feedback" }]
        setMessage(userMessageArr)
        generate()
    }

    const handleClose = () => {
        let userMessageArr = [...messages, { role: "user", content: "end the interview" }]
        setMessage(userMessageArr)
        generate()
    }

    const generate = async () => {

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${API_KEY}`,
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: messages,
                }),
            });

            const data = await response.json();
            // console.log(data)
            let resultText = data.choices[0]?.message;
            console.log("res", resultText)
            setAllMessages(resultText)
            let newMessages = [...messages, resultText]
            setMessage(newMessages)

        } catch (error) {
            console.error("Error:", error);

        }
        setResponse(false)
        // setAllMessages(messages)
    };

    useEffect(() => {
        generate()
    }, [messages])


    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (userMsg) {
            let newMessages = [...messages, { role: "user", content: userMsg }]
            setMessage(newMessages)
            //    let userMessageArr = [...userMessages, { role: "user", content: userMsg }]
            // setUserMessages(userMessageArr)
            setResponse(true)
            generate()
            setUserMsg("")
        } else {
            textareaRef.current?.focus();
        }
    }



    return (
        <div className='h-screen bg-gray-50 rounded-md m-5 p-2 w-3/4 m-auto'>

            <div className='bg-purple-200 rounded-md p-3 text-purple-700 font-bold text-lg'>
                <h1>Technology name</h1>
            </div>


            <div className="h-96 overflow-y-scroll border rounded-lg p-4">
                {
                    messages.map((message, index) => (
                        message.role == "assistant" ?
                            <div key={index} className="flex mb-2 justify-start">
                                <div className="flex bg-purple-400 rounded-lg p-2 w-3/4">
                                    <div className='mt-1'>
                                        <FaGgCircle size={"25px"} color='purple' />
                                    </div>
                                    <p className='text-left text-white font-bold-md ml-3 text-lg'>{message.content}</p>
                                </div>
                            </div>
                            :
                            <div key={index} className="flex mb-2 justify-end">
                                <div className="flex bg-gray-100 rounded-lg p-2 w-3/4 justify-end">
                                    <p className='text-gray-600 font-bold-lg mr-5 text-lg text-justify'>{index == 0 ? "Let's start" : message.content}</p>
                                    <div className='mt-1'>
                                        <FaUserGraduate size={"20px"} className='m-1' />
                                    </div>
                                </div>
                            </div>
                    ))
                }
                {response ? <p className='text-left ml-5'> Typing....</p> : ""}
            </div>


            <div className='flex justify-between my-5 mx-10'>
                <div className='w-3/4' >
                    <textarea className="w-full h-12 px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:border-blue-500"
                        placeholder="Enter your text here..."
                        ref={textareaRef}
                        value={userMsg}
                        onChange={(e) => setUserMsg(e.target.value)}
                    />
                </div>
                <div>
                    <button className='flex items-center bg-white p-3 text-gray-700 font-medium rounded-lg hover:bg-gray-200'
                        onClick={handleSubmit}
                    >
                        <FaPlay size={"20px"} className='m-1' />
                    </button>
                </div>
            </div>

            <div className='flex bg-gray-100 rounded-md m-5 p-10 m-auto gap-20 justify-center'>

                <button className='flex items-center bg-white p-3 text-gray-700 font-medium rounded-lg hover:bg-gray-200'>
                    <FaRegEdit size={"20px"} className='m-1' onClick={handleFeedback} />
                    GENERATE FEEDBACK
                </button>
                <button className='flex items-center bg-white p-3 text-red-700 font-medium rounded-lg hover:bg-gray-200'>
                    <FaRegWindowClose size={"20px"} className='m-1' onClick={handleClose} />
                    END INTERVIEW
                </button>
            </div>
        </div >
    )
}
