import { useState } from "react"
import { NavBar } from "./components/NavBar";
import { View } from "./View";
import { Footer } from "./Footer";
import { Select } from "./Select";


import "./styles/App.css"
import { AcordsList, NotesList } from "./list";
import { Game } from "./Game";

function App(){
    const [frame,setFrame] = useState(0);
    const [type,setType] = useState("acord")
    const [level,setLevel] = useState(0)

    return (
        <>
        <header className="header">
            <NavBar set={setFrame}/>
            {
               frame == 0 ? <View
                    set={setFrame}
               /> :(
                    frame == 10 ? <Game level={level} type={type} /> :(
                        frame == 1 ? <Select sType={setType} type="acord" sLevel={setLevel} set={setFrame} list={AcordsList} /> : (
                            frame == 2 ? <Select sType={setType} type="note" sLevel={setLevel} set={setFrame} list={NotesList} /> : (
                                null
                            )
                        )
                    )
               )
            }
        </header>
        <Footer />
        </>
    )
}

export default App;