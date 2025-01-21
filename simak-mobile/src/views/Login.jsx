import { useRef, useState } from "react"
import { FaSignInAlt } from "react-icons/fa"
import { FaKey, FaPhone } from "react-icons/fa6"
import { MdPhoneLocked } from "react-icons/md"
import { PiPhoneBold } from "react-icons/pi"
import { Link } from "react-router-dom"

const Login = () => {
    const noHp = useRef(null)
    const [showPassword,setShowPassword]=useState(false)
    const noHpHandler = () => {
        let awal = noHp.current.selectionStart
        let akhir = noHp.current.selectionEnd
        let isi = noHp.current.value
        let angka = isi.replace(/[^0-9]/g, "")
        let hasil = angka.replace(/(\d{4})/g, "$1-").replace(/-$/, '')
        let diff = hasil.length - isi.length < 0 ? 0 : hasil.length - isi.length
        noHp.current.value = hasil
        if (isi[awal - 1] == "-") diff = -1
        noHp.current.setSelectionRange(awal + diff, akhir + diff)
    }
   
    return (
        <>
            <div className="box w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-b from-indigo-600 via-indigo-500 to-white">
                <img src="/logo.svg" className="w-48"/>
                <h1 className=" text-4xl font-semibold py-3 mb-3 text-white drop-shadow-lg">Selamat datang</h1>
                <div className="login-box max-w-[90%] md:max-w-72 px-3 py-6 bg-white w-full shadow rounded">
                    <form action="" method="post">
                        <div className="flex items-center mb-4 relative">
                            <input type="text" name="no_hp" id="no_hp" className="pl-7 pr-3 py-2 text-gray-500 border-b border-gray-300 w-full focus:outline-none focus:border-indigo-600" placeholder="No kontak" ref={noHp} onInput={noHpHandler} />
                            <FaPhone className="absolute left-0 text-gray-500 ml-1" />
                        </div>
                        <div className="flex items-center  mb-4 relative">
                            <input type={!showPassword?'password':'text'} name="password" id="password" className="pl-7 pr-3 py-2 text-gray-500 border-b border-gray-300 w-full focus:outline-none focus:border-indigo-600" placeholder="Kata sandi"/>
                            <FaKey className="absolute left-0 text-gray-500 ml-1" />
                        </div>
                        <div className="flex items-center  mb-3 relative">
                            <input type="checkbox" name="show_password" id="show_password" className="relative " onChange={()=>setShowPassword(!showPassword)}/>
                            <label htmlFor="show_password" className="ml-2 text-gray-500 text-sm font-light">Tampilkan kata sandi</label>
                        </div>
                        <button type="submit" className="bg-indigo-600 text-white py-2 px-3 w-full mb-3 rounded hover:bg-indigo-500 flex gap-2 justify-center items-center tracking-wide">
                            Login
                            <FaSignInAlt />
                        </button>
                        <p className="text-gray-500 text-sm text-center font-light ">Lupa kata sandi? hubungi <Link to="https://wa.me/6289605313821" className="text-indigo-500 cursor-pointer">admin</Link></p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login