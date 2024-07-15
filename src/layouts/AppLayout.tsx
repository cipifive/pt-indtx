import { FC } from "react"
import { Navbar } from "../components/shared/Navbar"

export const AppLayout:FC<any> = (props):JSX.Element => {

    const {
        Component
    } = props
    return (
        <div className="flex flex-col h-full w-full relative">
            <Navbar/>
            <Component />
        </div>
    )
}