import DOMPurify from "dompurify";
import { FC } from "react";
import { useLocation } from "react-router-dom";

export const EpisodeCard:FC = () => {

    const location = useLocation()
    
    return (
        <div className="flex flex-col justify-between w-8/12 ">
            <div className="flex flex-col bg-white p-4 w-full mb-2  border border-gray-200 rounded-lg shadow-md lg:max-w-md">
                <span data-testid="title-episode" className="font-bold text-2xl p-2">{location.state.title}</span>
                <span data-testid="description-episode" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(location.state.podcast_description) }} className="font-normal p-2"></span>
                <audio data-testid="audio-player" className="w-full rounded" controls>
                    <source src={location.state.podcast_url} type="audio/mpeg" />
                    Tu navegador no soporta la etiqueta de audio.
                </audio>           
            </div>
            </div>
    )
}