import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const [but1, setBut1] = useState<boolean>(false);
    const [but2, setBut2] = useState<boolean>(false);
    const [but3, setBut3] = useState<boolean>(false);
    const navigate = useNavigate()

    const handleclick1 = () => {
        setBut1(!but1)
        setBut2(false)
        setBut3(false)
    }

    const handleclose1 = () => {
        setBut1(!but1)
    }

    const handleclick2 = () => {
        setBut1(false)
        setBut2(!but2)
        setBut3(false)

    }
    const handleclose2 = () => {
        setBut2(!but2)
    }

    const handleclick3 = () => {
        setBut1(false)
        setBut2(false)
        setBut3(!but3)
    }

    const handleclose3 = () => {
        setBut3(!but3)
    }

    const handleMERN = () => {
        navigate(`/interview/${0}`)
    }

    const handleNodeJs = () => {
        navigate(`/interview/${1}`)
    }

    const handleJava = () => {
        navigate(`/interview/${2}`)
    }

    return (
        <>
            <div className="grid grid-cols-1 gap-10 justify-evenly">
                <div className="w-full h-80 border-black border-solid">
                    <img className="w-full h-80" src="https://luckylittlelearners.com/wp-content/uploads/2020/07/research-980x515.jpg" alt="home" />
                </div>
                <div className="grid grid-cols-1 gap-10 justify-evenly p-10">
                    <h1 className="text-gray-600 text-5xl font-bold">6 Biggest Advantage of Digital Interviewing Platform </h1>
                    <div className="grid grid-cols-2 gap-10 justify-evenly">
                        <div className="grid grid-cols-2 justify-evenly shadow-md p-8 rounded-lg text-gray-500">
                            <div>
                                <h2 className="font-mono text-blue-800 text-3xl font-bold">Convenient</h2>
                                <img className="h-40" src="https://cdn-icons-png.flaticon.com/128/1786/1786650.png" alt="1" />
                            </div>
                            <div className="flex">
                                <p className="text-justify">Taking interviews from in-person meetings to virtual ones is, at the very least, incredibly convenient. The ease of signing onto the internet and chatting over a webcam is much easier than hopping in a car, facing traffic, and the stress of getting lost on the way to an interview.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 justify-evenly shadow-md p-8 rounded-lg text-gray-500">
                            <div>
                                <h2 className="font-mono text-blue-800 text-3xl font-bold">Flexible</h2>
                                <img className="h-40" src="https://cdn-icons-png.flaticon.com/512/4471/4471996.png" alt="1" />
                            </div>
                            <div className="flex ">
                                <p className="text-justify">Companies shifting to completely remote or hybrid workforces have the benefit of an expanded candidate pool that’s not required to be located in any specific geographic location. In order to support these new workforce dynamics, they will require the flexibility that video interviews offer.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 justify-evenly shadow-md p-8 rounded-lg text-gray-500">
                            <div>
                                <h2 className="font-mono text-blue-800 text-3xl font-bold">Efficient</h2>
                                <img className="h-40" src="https://cdn-icons-png.flaticon.com/512/4371/4371462.png" alt="1" />
                            </div>
                            <div className="flex">
                                <p className="text-justify">Not only are video interviews more convenient than traditional in-person interviews, they are also more efficient and reduce your company’s time to fill. Interviews take less time to schedule and are accessible to out-of-town applicants. This means that they can take place sooner, rather than later. And when interviews are scheduled quickly, hiring can be done quickly too.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 justify-evenly shadow-md p-8 rounded-lg text-gray-500">
                            <div>
                                <h2 className="font-mono text-blue-800 text-3xl font-bold">Insightful</h2>
                                <img className="h-40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtSGsK8PhZ7hXqqcnWPrNmLt3LDp_-9PDH03FeN6xbqtV0o0E7wYRI985c15NZxmuGWiQ&usqp=CAU" alt="1" />
                            </div>
                            <div className="flex">
                                <p className="text-justify">While the thought of being recorded might be intimidating, the ability to capture a virtual interview actually benefits both the interviewer and interviewee. Recording interview questions ensure that the interview is a safe, compliant, and consistent experience for each applicant. The recording also allows for interviewer feedback from peers and managers, which supports improved interview delivery in the future.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 justify-evenly shadow-md p-8 rounded-lg text-gray-500">
                            <div>
                                <h2 className="font-mono text-blue-800 text-3xl font-bold">Consistent</h2>
                                <img className="h-40" src="data:image/png;base64,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" alt="1" />
                            </div>
                            <div className="flex">
                                <p className="text-justify">Consistency is key, especially when it comes to delivering quality interviews. All questions asked during a virtual interview are both monitorable and trackable, which means that interviews are as similar as possible for each candidate. With question consistency and interviewer performance tracking, applicants are more likely to be assessed fairly.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 justify-evenly shadow-md p-8 rounded-lg text-gray-500">
                            <div>
                                <h2 className="font-mono text-blue-800 text-3xl font-bold">Cost Savings</h2>
                                <img className="h-40" src="https://cdn-icons-png.flaticon.com/512/3347/3347971.png" alt="1" />
                            </div>
                            <div className="flex">
                                <p className="text-justify">Video interviews don’t just save time for recruiters and candidates—they also save them money. And in today’s economy—where many consumers and businesses alike are tightening their belts—cost savings is a big reason to consider video interviews.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  interview options */}
                <h1 className="text-gray-600 text-5xl font-bold">Choose Your Domain</h1>
                <div className="grid grid-cols-3 justify-evenly">
                    <div className="grid grid-cols-2 justify-evenly shadow-md p-3">
                        <div>
                            <h2 className="font-mono text-blue-800 text-3xl font-bold">MERN</h2>
                            <img className="h-40 ml-5" src="https://topskilled.in/wp-content/uploads/2023/06/Icons_mern500px.png" alt="1" />
                        </div>
                        <div>
                            <button onClick={handleclick1} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Take Assessment</button>
                            {but1 && <div><button type="button" onClick={handleMERN} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" >Start</button><button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={handleclose1}>Cancel</button></div>}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 justify-evenly shadow-md p-3">
                        <div>
                            <h2 className="font-mono text-blue-800 text-3xl font-bold">NODE</h2>
                            <img className="h-40 ml-5" src="https://icon-library.com/images/node-js-icon/node-js-icon-8.jpg" alt="1" />
                        </div>
                        <div>
                            <button onClick={handleclick2} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Take Assessment</button>
                            {but2 && <div><button type="button" onClick={handleNodeJs} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Start</button><button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={handleclose2}>Cancel</button></div>}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 justify-evenly shadow-md p-3">
                        <div>
                            <h2 className="font-mono text-blue-800 text-3xl font-bold">JAVA</h2>
                            <img className="h-40 ml-5" src="https://www.iconbunny.com/icons/media/catalog/product/1/7/1752.12-java-icon-iconbunny.jpg" alt="1" />
                        </div>
                        <div>
                            <button onClick={handleclick3} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Take Assessment</button>
                            {but3 && <div><button type="button" onClick={handleJava} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Start</button><button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={handleclose3}>Cancel</button></div>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomePage;