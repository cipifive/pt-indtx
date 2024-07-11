import { FC, useEffect } from "react"
import { useNavigationStore } from "../Zustand/useNavigationStore"

export const Podcasts:FC = ():JSX.Element => {

    const { setIsNavigating } = useNavigationStore()

    useEffect(() => {
        setTimeout(() => {
            setIsNavigating(false)
        },1000)
        
    },[])
    return (
        <div className="h-full mt-16 ">
            Podcasts Component
        </div>
    )
}