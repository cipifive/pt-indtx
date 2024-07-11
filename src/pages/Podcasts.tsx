import { ChangeEvent, FC, useEffect, useState } from "react"
import { useNavigationStore } from "../Zustand/useNavigationStore"
import { error } from "../utils/toast"
import { getPodcasts } from "../services/podcast-service"
import { GET_PODCASTS } from "../constants/endpoints"
import { checkDataStored } from "../utils/helpers"

export const Podcasts:FC = ():JSX.Element => {

    const { setIsNavigating } = useNavigationStore()

    const [podcasts, setPodcasts] = useState<any[]>([])

    const [filteredPodcasts, setFilteredPodcast] = useState<any[]>([])

    const handleFilterPodcasts = (e:ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.toLowerCase()
        let filtered_podcasts = podcasts.filter(podcast => podcast['im:name'].label.toLowerCase().startsWith(value) || podcast['im:artist'].label.toLowerCase().startsWith(value) )
        setFilteredPodcast(filtered_podcasts)
    }

    const fetchPodcasts = async () => {
        try {
            if(!checkDataStored()) {
                const response = await getPodcasts(GET_PODCASTS)
                const { entry } = response.data.feed
                setPodcasts(entry)
                setFilteredPodcast(entry)
                localStorage.setItem("podcasts-data-stored", JSON.stringify({registered_at:new Date(),items:entry}))
            } else {
                let stored_podcasts = JSON.parse(localStorage.getItem("podcasts-data-stored") || '{}')
                setPodcasts(stored_podcasts.items)
                setFilteredPodcast(stored_podcasts.items)
            }
            
        } catch (err) {
            error('Error al obtener los podcasts')
        }
    }

    useEffect(() => {
        fetchPodcasts()
        setTimeout(() => {
            setIsNavigating(false)
        },1000)
        
    },[])
    return (
        <div className="flex flex-col h-full mt-16 ">
            <div className="flex justify-end items-center pr-4 h-1/6 w-full">
                <span className="flex justify-center items-center bg-blue-titles font-bold p-2 rounded text-white w-12 mr-4">{filteredPodcasts.length}</span>
                <input onChange={handleFilterPodcasts} className=" font-normal p-4 border w-1/6 " placeholder="Filter podcasts..." type="text" />
            </div>
            <div className="grid grid-cols-4 gap-x-8 gap-y-44 h-5/6 p-12 pt-20 ">
                {
                    filteredPodcasts?.map(podcast => {
                        return (
                            <div key={podcast.id.attributes['im:id']} className="h-40 flex items-end justify-center relative border border-gray-200 rounded-lg shadow-md lg:max-w-md p-2 transition-transform duration-300 transform hover:scale-105 cursor-pointer">
                                <img className="rounded-full top-[-100px] absolute border border-slate-300" src={podcast['im:image'][2].label} />
                                <div className="flex flex-col justify-center items-center">
                                    <span className="font-bold text-">{podcast['im:name'].label.toUpperCase()}</span>
                                    <span className="font-normal text-sm">Author: {podcast['im:artist'].label}</span>
                                </div>
                                
                            </div>
                            
                        )
                    } )
                }
            </div>
        </div>
    )
}