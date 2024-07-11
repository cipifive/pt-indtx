import { FC,  } from "react"
import { useNavigate } from "react-router-dom"
import { Loader } from "./Loader"
import { INavigationStore } from "../../models/zustand-model"
import { useNavigationStore } from "../../Zustand/useNavigationStore"

export const Navbar:FC = () => {

    const navigate = useNavigate()

    const { isNavigating, setIsNavigating }:INavigationStore = useNavigationStore()

    const handleGoHome = () => {
        if(window.location.pathname !== "/") {
            setIsNavigating(true)
            navigate("/")
        }
    }

    return (
        <div className="flex justify-between items-center w-full h-16 pl-4 pr-4  border-b-2 bg-white z-[1] fixed">
            <span className="font-bold text-blue-titles text-2xl cursor-pointer" onClick={handleGoHome}>Podcaster</span>
            {
                isNavigating?
                <Loader />
                :
                false
            }
            
        </div>
    )
}