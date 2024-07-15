import { FC } from "react"

export const Loader:FC = ():JSX.Element => {
    return (
        <div data-testid="loader" className="lds-ripple"><div></div><div></div></div>
    )
}