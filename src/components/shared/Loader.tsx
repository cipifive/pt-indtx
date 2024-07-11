import { FC } from "react"

export const Loader:FC = ():JSX.Element => {
    return (
        <div className="lds-ripple"><div></div><div></div></div>
    )
}