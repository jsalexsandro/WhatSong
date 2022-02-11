import { useState } from "react"

import { NavBar } from "./components/NavBar";
import { View } from "./View";
import { Footer } from "./Footer";
import "./styles/App.css"

function App(){
    const [frame,setFrame] = useState(0);

    return (
        <>
        <header className="header">
            <NavBar event={
                (() => {
                    setFrame(frame + 1)
                })
            }/>
            {
                frame == 0 ? <View />:null
            }
            
        </header>
        <Footer />
        </>
    )
}

export default App;