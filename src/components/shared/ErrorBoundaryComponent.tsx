import { FC } from "react"
import { IErrorBoundaryProps } from "../../models/props-model"


export const ErrorBoundaryComponent:FC<IErrorBoundaryProps> = (props):JSX.Element => {

    const {
        error,
        resetErrorBoundary
    } = props

    return (
        <div className="flex flex-col justify-center bg-blue-titles items-center font-bold h-full w-full text-white">
            <span className="text-3xl p-10">Ups! parece que se ha producido el siguiente error:</span>
            <span className="flex justify-center items-center p-4 h-24 bg-white rounded border-white text-black">{error.message}</span>
            <span className="text-2xl p-10">Contacta con cperezsilos5@gmail.com si crees que se trata de un error irreparable.</span>
            <button className="p-4 bg-white text-black" onClick={resetErrorBoundary}>Recargar página</button>
        </div>
    )
}