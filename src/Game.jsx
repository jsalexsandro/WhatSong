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

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }

        let rand = getRandomInt(0,max + 1)
        

        return (
            <div className="gaming">
                <Song src=""/>
                {rand}
                <div className="gaming-buttons">
                    { 
                        maxList.reverse().map((c) => {
                            return (
                                <button className="gaming-button" >
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
                    <Gamming />
                )
            }
        </div>
    )
}