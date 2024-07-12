import { AgGridReact } from "ag-grid-react"
import { FC } from "react"
import { PodcastEpisodesProps } from "../../../models/props-model"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { INavigationStore } from "../../../models/zustand-model"
import { useNavigationStore } from "../../../Zustand/useNavigationStore"

export const EpisodesTable:FC<PodcastEpisodesProps> = (props):JSX.Element => {

    const {
        episodes
    } = props

    const navigate = useNavigate()

    const { id }:any = useParams()

    const location = useLocation()

    const { setIsNavigating }:INavigationStore = useNavigationStore()
    
    const durationRenderer = (params:any) => {
        const totalSeconds = Math.floor((params.value ?? 0) / 1000)
        const minutes = Math.floor(totalSeconds / 60)
        const seconds = totalSeconds % 60

        const paddedSeconds = seconds.toString().padStart(2, '0')

        return `${minutes}:${paddedSeconds}`
    }

    const dateRenderer = (params:any) => {
        const day = new Date(params.value).getDate().toString().padStart(2, '0'); 
        const month = (new Date(params.value).getMonth() + 1).toString().padStart(2, '0')  
        const year = new Date(params.value).getFullYear()

        return `${day}-${month}-${year}`
    }

    const handleCellClicked = (params:any) => {
        console.log(params.data)
        setIsNavigating(true)
        navigate(`/podcast/${id}/episode/${params.data.trackId}`, { state: { description: location.state.description, title: params.data.trackName, podcast_description: params.data.description } })
    }

    return (
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
                                onCellClicked: handleCellClicked,
                                flex : 6
                            },
                            {
                                field:"releaseDate",
                                headerName : "Date",
                                resizable: false,
                                cellRenderer: dateRenderer,
                                cellClass:'font-normal text-center',
                                headerClass:'font-bold  text-center',
                                flex : 1
                            },
                            {
                                field:"trackTimeMillis",
                                headerName : "Duration",
                                resizable: false,
                                cellRenderer: durationRenderer,
                                cellClass:'font-normal text-center',
                                headerClass:'font-bold text-center',
                                flex: 1
                            }
                        ]}
                    />
                </div>
    )
}