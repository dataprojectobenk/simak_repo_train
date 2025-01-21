import { FaSignInAlt } from "react-icons/fa"
import { FaAddressCard, FaKey } from "react-icons/fa6"

const Login = () => {
    return (
        <>
            <div className="main w-screen h-screen bg-gradient-to-b from-red-800  via-red-500 to-red-200 flex flex-col justify-center items-center ">
                <img src="./en-logo.svg" className="w-36" />
                <h1 className="text-white text-3xl font-extrabold tracking-wider drop-shadow-md mt-4 text-center">Welcome back</h1>
                <p className="text-sm italic text-gray-200 mt-0">Please enter your credentials to login</p>
                <div className="login-box px-4 py-2 bg-white shadow w-[90%] max-w-[275px] mt-6 rounded">
                    <form action="" method="post">
                        <div className="input-group flex items-center relative mt-2">
                            <input type="number" name="nis" id="nis" className="pl-9 pr-3 py-2 text-sm w-full border-b border-gray-300 focus:outline-none focus:border-black text-gray-600" placeholder="NIS" />
                            <FaAddressCard className="absolute left-3 text-gray-500"/>
                        </div>
                        <div className="input-group flex items-center relative mt-2">
                            <input type="password" name="password" id="password" className="pl-9 pr-3 py-2 text-sm w-full border-b border-gray-300 focus:outline-none focus:border-black text-gray-600" placeholder="Kata sandi" />
                            <FaKey className="absolute left-3 text-gray-500"/>
                        </div>
                        <button className="w-full px-3 py-2 flex items-center gap-2 justify-center font-semibold mt-4 border rounded border-gray-300 hover:bg-gray-200 hover:text-white transition duration-300 text-gray-700">
                            Login
                            <FaSignInAlt />
                        </button>
                        <p className="text-sm text-gray-500 italic text-center mt-2 mb-4">Lupa akun ? Hubungi <a href="#" className="text-indigo-500 not-italic hover:text-indigo-700">Admin.</a></p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login