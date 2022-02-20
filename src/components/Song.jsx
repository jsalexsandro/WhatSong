import "../styles/Icon.css"
import { PlayMusic } from "./PlayMusic"

export const Song = (props = {
    src:""
}) => {
    
    function Play(){
        return <PlayMusic src={props.src} />
    }

    return (
        <div onClick={() => new Audio(props.src).play()} className="icon-div">
            <i className="icon fa-solid fa-music-note"></i>
            {Play()}
        </div>
    )
}