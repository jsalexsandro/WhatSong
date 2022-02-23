import { useState } from "react"
// import { PlayMusic } from "./components/PlayMusic"
import { Song } from "./components/Song"
import { A_B, C_R_E,F_G } from "./list"
import "./styles/Escute.css"


export const Escute = (props) => {
    const [musicPage,setMusicPage] = useState(0)
    const [page,setPage] = useState(0)
    
    const set = props.set

    const level = props.level
    const type = props.type
    
    function len(){
        if (level == 0){
            var a = C_R_E.size
            return a
        } 
        if (level == 1){
            var a = F_G.size
            return a
        } 
        if (level == 2){
            var a = A_B.size
            return a
        } 
    }

    const max = len()
    

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


    function DivEscute(props){
        var src = MusicState(musicPage).src
        var name = MusicState(musicPage).value
        return (
            <div className="div-escute">
                <Song src={src} />
                <p className="view-text">
                    {name}
                </p>
                <div className="div-buttons-escute">
                    {
                        musicPage > 0 ? (
                            <button onClick={ () => setMusicPage(musicPage - 1)} className="button-escute">
                                Anterio
                            </button>
                        ) : null
                    }
                    {
                        musicPage < max ? (<button onClick={() => setMusicPage(musicPage + 1)} className="button-escute">
                            Proxima
                        </button>) : null
                    }
                    {
                        musicPage == max ? (
                            <button  onClick={() =>{ set(1)}} className="button-escute">
                                Continuar
                            </button>
                        ) :null
                    }
                </div>
            </div>
        )

    }   
    

    return <div className="Escute">
        {
            (() => {
                if (page == 1){
                    return <DivEscute />
                } else if (page == 2){
                        
                    return <DivEscute />
                } else { // 3
                    return <DivEscute />
                }
            })()
        }
    </div>
}