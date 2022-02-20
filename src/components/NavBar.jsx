import { StatusBar } from "./StatusBar"

export function NavBar(props){
    return (
        <nav className="nav">
            <StatusBar color="#1c1b1b" />
            <h1 className="textMenu">
                What<span className="textMenuSp">Song</span>
            </h1>
            <div onClick = {
                () => props.set(0)
            }>
                <i className="fa-solid fa-house house"></i>
            </div>
        </nav>
    )
}