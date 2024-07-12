import { FC, useEffect, useState } from "react";
import { useNavigationStore } from "../Zustand/useNavigationStore";
import { INavigationStore } from "../models/zustand-model";
import { checkDataStored } from "../utils/helpers";
import { GET_PODCAST_BY_ID } from "../constants/endpoints";
import { useParams } from "react-router-dom";
import { error } from "../utils/toast";
import { getPodcastByID } from "../services/podcast-service";
import { PodcastCard } from "../components/Podcast/PodcastCard";
import { PodcastEpisodes } from "../components/Podcast/PodcastEpisodes/PodcastEpisodes";
import { IEpisode } from "../models/episodes-model";

export const Episode:FC = () => {

    const { setIsNavigating }:INavigationStore = useNavigationStore()

    const { id }:any = useParams()

    const [episodes, setEpisodes] = useState<IEpisode[]>([])


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
            <PodcastCard episode={episodes[0]} />
            <div className="flex flex-col justify-between w-8/12 ">
            <div className="flex flex-col bg-white p-4 w-full mb-2 font-bold text-2xl border border-gray-200 rounded-lg shadow-md lg:max-w-md">
                <span>title</span>
                <span>desc</span>
            </div>
            </div>
        </div>
    )
}