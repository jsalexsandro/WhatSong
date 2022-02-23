import { useState } from "react"
import { Escute   } from "./Escute"
import { Song     } from "./components/Song"
import { A_B, C_R_E,F_G } from "./list"
import "./styles/ViewGame.css"
import "./styles/Gaming.css"

export const Game = function(props){
    const level = props.level
    const type = props.type
    const [page,setPage] = useState(0)
    const [game,setGame] = useState(1)
    const [gLevel,setGlevel] = useState(1)

    function Gamming(){

        function getLevel(){
            if (type == "acord"){
                if (level == 0){
                    var a = C_R_E
                    return a
                } 
                if (level == 1){
                    var a = F_G
                    return a
                } 
                if (level == 2){
                    var a = A_B
                    return a
                } 
            }
        }
        const max = getLevel().size
        var maxList = []
        for (let c = max;c > -1; c --){
            maxList.push(c)
        }

        function getName(n){
            const l = getLevel()
            return l[n].value
        }

        function MusicState(count){
            if (type == "acord"){
                if (level == 0){
                    var a = C_R_E[count]
                    return a
                } 
                if (level == 1){
                    var a = F_G[count]
                    return a
                } 
                if (level == 2){
                    var a = A_B[count]
                    return a
                } 
            }
        }

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }

        let rand = getRandomInt(0,max + 1)
        
        const src  = MusicState(rand).src

        return (
            <div className="gaming">
                <p className="game-level">
                    {
                        gLevel + "/30"
                    }
                    
                </p>
                <Song src={src} />
                <div className="gaming-buttons">
                    { 
                        maxList.reverse().map((c) => {
                            return (
                                <button onClick={
                                    () => {
                                        if (c == rand){
                                            console.log("Sim")
                                            setGlevel(gLevel + 1)
                                            setGame(game + 1)
                                        }
                                    }
                                } className="gaming-button" >
                                    {getName(c)}
                                </button>
                            )
                        })
                    }           
                </div>
            </div>
        )
    }

    return (
        <div className="view-game">
            {
                page == 0 ? (
                    <Escute set={setPage} level={level} type={type} />
                ) : (
                    (game != 0 ? (
                        (
                            gLevel <= 30 ? (
                                <Gamming />
                            ): null
                        )
                    ) :null )
                )
            }
        </div>
    )
}