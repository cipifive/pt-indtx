import {  Slide, toast } from "react-toastify";

export const error = (message:string) => (
    toast(message, {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        type:'error',
        className: "border border-slate-500 text-black rounded  font-bold text-sm",
        transition: Slide,
        })
)