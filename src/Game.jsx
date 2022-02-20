import { useState } from "react"
import { Escute } from "./Escute"
import "./styles/ViewGame.css"

function Gamming(){
    return (
        <div>
            <h1>Em desenvolvimento</h1>
        </div>
    )
}

export const Game = function(props){
    const level = props.level
    const type = props.type
    const [page,setPage] = useState(0)

    return (
        <div className="view-game">
            {
                page == 0 ? (
                    <Escute set={setPage} level={level} type={type} />
                ) : (
                    <Gamming />
                )
            }
        </div>
    )
}