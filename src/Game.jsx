import { Escute } from "./Escute"
import "./styles/ViewGame.css"

export const Game = function(props){
    const level = props.level
    const type = props.type
    return (
        <div className="view-game">
            <Escute level={level} type={type} />
        </div>
    )
}