import { StatusBar } from "./StatusBar"

export function NavBar(props){
    return (
        <nav className="nav">
            <StatusBar color="#00ca00" />
            <h1 className="textMenu">
                What<span className="textMenuSp">Song</span>
            </h1>
            <div onClick = {props.event}>
                <i class="fa-solid fa-house house"></i>
            </div>
        </nav>
    )
}