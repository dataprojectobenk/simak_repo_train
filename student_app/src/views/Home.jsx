import { useState } from "react"
import { FaPlug } from "react-icons/fa"
import { FaGear, FaGears, FaPlus } from "react-icons/fa6"
import { useLoaderData } from "react-router-dom"

const Home = () => {
    const {credential,user}=useLoaderData()
    const [status, setStatus] = useState('loading')
    return (
        <>
            <div className="main w-screen h-screen bg-gradient-to-b from-red-700 to-red-600">
                <div className="main-content w-full max-w-[400px] mx-auto ">
                    <div className="header px-3 py-4 flex items-start">
                        <div className="profile-foto w-12 rounded-[50%]" >
                            <img src="./avatar.svg" />
                        </div>
                        <div className="profile-nama ml-2">
                            <h1 className="font-extrabold text-white drop-shadow ">Welcome</h1>
                            <h1 className="text-xl -mt-2 font-bold text-white drop-shadow">{user.nama}</h1>
                        </div>
                        <div className="button ml-auto flex items-center h-12 ">
                            <button className="text-white p-3 rounded-full bg-white  bg-opacity-10 text-xl">
                                <FaGear />
                            </button>
                        </div>
                    </div>
                    <div className="content px-3 py-4">
                        <div className="task-complete px-3 py-2 bg-yellow-500 rounded-xl">
                            <h1 className={`text-sm  text-gray-200 tracking-wider ${status == 'loading' ? 'bg-gray-200 w-48 animate-pulse' : ''}`}>Total Vocabulary</h1>
                            <div className="my-2 flex  gap-2">
                                <h1 className={` text-4xl font-extrabold tracking-wide ${status=='loading'?'bg-gray-200 animate-pulse text-gray-200':'text-white'}  `}>0 </h1>
                                <h1 className={` text-4xl font-extrabold tracking-wide ${status=='loading'?'bg-gray-200 animate-pulse text-gray-200':'text-white'}`}>Word</h1>
                            </div>
                        </div>
                        <h1 className="text-slate-200 my-4 tracking-wider font-semibold">Task</h1>
                        <button className=" w-full px-3 py-3 flex justify-center items-center gap-2 font-semibold text-white bg-white bg-opacity-10 rounded-xl hover:bg-opacity-20">
                            New Vocabulary
                            <FaPlus />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home