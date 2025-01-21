import { FaSignal } from "react-icons/fa";
import { IoCloudOfflineSharp } from "react-icons/io5";
import { MdRefresh } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function PageError(){
    const navigate = useNavigate()
    return(
        <>
           <div className="main w-screen h-screen bg-gradient-to-b from-red-700 to-red-600">
                <div className="main-content w-full h-full flex flex-col items-center justify-center">
                    <h1 >
                        <IoCloudOfflineSharp className="text-[72px] text-white drop-shadow"/>
                    </h1>
                    <p className="text-white tracking-wide text-sm mt-2">Tidak ada koneksi internet!</p>
                    <button className="text-white px-3 py-2 border border-white mt-4 rounded flex items-center gap-2" onClick={()=>navigate(-1)}>
                        Memuat ulang
                        <MdRefresh />
                    </button>
                </div>
            </div> 
        </>
    )
}