import { FC } from "react"
import { EpisodesCountProps } from "../../../models/props-model"

export const EpisodesCount:FC<EpisodesCountProps>= (props):JSX.Element => {

    const {
        count
    } = props

    return (
        <div className="bg-white p-4 w-full mb-2 font-bold text-2xl border border-gray-200 rounded-lg shadow-md lg:max-w-md">
            <span>Episodes: {count}</span>
        </div>  
    )
}