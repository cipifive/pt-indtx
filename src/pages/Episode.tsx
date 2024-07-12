import { FC, useEffect, useState } from "react";
import { useNavigationStore } from "../Zustand/useNavigationStore";
import { INavigationStore } from "../models/zustand-model";
import { checkDataStored } from "../utils/helpers";
import { GET_PODCAST_BY_ID } from "../constants/endpoints";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { error } from "../utils/toast";
import { getPodcastByID } from "../services/podcast-service";
import { PodcastCard } from "../components/Podcast/PodcastCard";
import { IEpisode } from "../models/episodes-model";
import DOMPurify from 'dompurify';

export const Episode:FC = () => {

    const { setIsNavigating }:INavigationStore = useNavigationStore()

    const { id }:any = useParams()

    const [episodes, setEpisodes] = useState<IEpisode[]>([])

    const location = useLocation()

    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(-1)
    }

    const fetchPodcast = async () => {
        try {
            if(!checkDataStored(`${id}-episodes-data-stored`)) {
                const response = await getPodcastByID(GET_PODCAST_BY_ID(id))
                console.log(response)
                const { results } = response.data
                setEpisodes(results)
                localStorage.setItem(`${id}-episodes-data-stored`, JSON.stringify({registered_at:new Date(),items:results}))
            } else {
                let stored_episodes = JSON.parse(localStorage.getItem(`${id}-episodes-data-stored`) || '{}')
                setEpisodes(stored_episodes.items)
            }
        } catch (err) {
            console.log(err)
            error('Error al obtener la información del podcast')
        }
    }

    useEffect(() => {
        fetchPodcast()
        setTimeout(() => {
            setIsNavigating(false)
        },1000)
    },[])
    
    return (
        <div className="flex justify-around h-full mt-16 p-4 ">
            <PodcastCard callback={handleGoBack} episode={episodes[0]} />
            <div className="flex flex-col justify-between w-8/12 ">
            <div className="flex flex-col bg-white p-4 w-full mb-2  border border-gray-200 rounded-lg shadow-md lg:max-w-md">
                <span className="font-bold text-2xl p-2">{location.state.title}</span>
                <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(location.state.podcast_description) }} className="font-normal p-2"></span>
                <audio className="w-full rounded" controls>
                    <source src={location.state.podcast_url} type="audio/mpeg" />
                    Tu navegador no soporta la etiqueta de audio.
                </audio>           
            </div>
            </div>
        </div>
    )
}