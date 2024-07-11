import { FC, useEffect, useState } from "react";
import { useNavigationStore } from "../Zustand/useNavigationStore";
import { INavigationStore } from "../models/zustand-model";
import { checkDataStored } from "../utils/helpers";
import { GET_PODCAST_BY_ID } from "../constants/endpoints";
import { useLocation, useParams } from "react-router-dom";
import { error } from "../utils/toast";
import { getPodcastByID } from "../services/podcast-service";
import { AgGridReact } from "ag-grid-react";

export const Podcast:FC = () => {

    const { setIsNavigating }:INavigationStore = useNavigationStore()

    const { id }:any = useParams()

    const location = useLocation()

    const [episodes, setEpisodes] = useState<any[]>([])

    const durationRenderer = (params:any) => {
        const totalSeconds = Math.floor(params.value / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        const paddedSeconds = seconds.toString().padStart(2, '0');

        return `${minutes}:${paddedSeconds}`;
    }

    const dateRenderer = (params:any) => {
        const day = new Date(params.value).getDate().toString().padStart(2, '0');  // Obtener el día y asegurarse de que tenga dos dígitos
        const month = (new Date(params.value).getMonth() + 1).toString().padStart(2, '0');  // Obtener el mes (0-11) y asegurarse de que tenga dos dígitos
        const year = new Date(params.value).getFullYear();  // Obtener el año

        return `${day}-${month}-${year}`;
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

            <div className="flex flex-col w-3/12 bg-white h-5/6 p-4 border border-gray-200 rounded-lg shadow-md lg:max-w-md">
                <div className="flex justify-center items-center h-3/6 border-b-2">
                   <img className="rounded " src={episodes[0]?.artworkUrl600} width={225} />
                </div>
                <div className="flex flex-col justify-center items-start border-b-2 h-1/6">
                    <span className="font-bold">{episodes[0]?.collectionName}</span>
                    <span className="font-normal">by {episodes[0]?.artistName}</span>
                </div>
                <div className="flex flex-col justify-center items-start h-2/6  ">
                    <span className="font-bold">Description</span>
                    <span className="font-">{location?.state?.description.length > 160 ? location?.state?.description.slice(0, 160) + '...' : location?.state?.description}</span>
                </div>
            </div>
            
            <div className="flex flex-col justify-between w-8/12 ">
                <div className="bg-white p-4 w-full mb-2 font-bold text-2xl border border-gray-200 rounded-lg shadow-md lg:max-w-md">
                    <span>Episodes: {episodes.length}</span>
                </div>
                <div className="ag-theme-quartz bg-white w-full h-full p-4 border border-gray-200 rounded-lg shadow-md lg:max-w-md ">
                    <AgGridReact 
                        rowData={episodes}
                        suppressCellFocus
                        suppressRowClickSelection
                        columnDefs={[
                            {
                                field:"trackName",
                                headerName: "Title",
                                resizable: false,
                                cellClass:'font-normal text-blue-titles cursor-pointer',
                                headerClass:'font-bold',
                                flex : 6
                            },
                            {
                                field:"releaseDate",
                                headerName : "Date",
                                resizable: false,
                                cellRenderer: dateRenderer,
                                cellClass:'font-normal',
                                headerClass:'font-bold',
                                flex : 1
                            },
                            {
                                field:"trackTimeMillis",
                                headerName : "Duration",
                                resizable: false,
                                cellRenderer: durationRenderer,
                                cellClass:'font-normal',
                                headerClass:'font-bold',
                                flex: 1
                            }
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}