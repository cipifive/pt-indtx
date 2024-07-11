import { ChangeEvent, FC, useEffect, useState } from "react"
import { useNavigationStore } from "../Zustand/useNavigationStore"
import { error } from "../utils/toast"
import { getPodcasts } from "../services/podcast-service"
import { GET_PODCASTS } from "../constants/endpoints"
import { checkDataStored } from "../utils/helpers"
import { IPodcast } from "../models/podcasts-model"
import { PodcastInput } from "../components/Podcasts/PodcastInput"
import { PodcastFeed } from "../components/Podcasts/PodcastFeed"

export const Podcasts:FC = ():JSX.Element => {

    const { setIsNavigating } = useNavigationStore()

    const [podcasts, setPodcasts] = useState<IPodcast[]>([])

    const [filteredPodcasts, setFilteredPodcast] = useState<IPodcast[]>([])

    const handleFilterPodcasts = (e:ChangeEvent<HTMLInputElement>) => {
        let value: string = e.target.value.toLowerCase()
        let filtered_podcasts:IPodcast[] = podcasts.filter((podcast:IPodcast) => podcast['im:name'].label.toLowerCase().includes(value) || podcast['im:artist'].label.toLowerCase().includes(value) )
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
            <PodcastInput filteredPodcasts={filteredPodcasts} handleFilterPodcasts={handleFilterPodcasts} />
            <PodcastFeed filteredPodcasts={filteredPodcasts} />
        </div>
    )
}