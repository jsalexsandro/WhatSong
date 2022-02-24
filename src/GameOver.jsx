import "./styles/GameOver.css"

function GameOver(props){
    return (
        <div className="GameOver">
            <section className="local">
                <p className="game-over-text">
                    Você perdeu!!
                </p>
                <div className="game-button-div">
                    <button onClick={
                        props.set
                    } className="over-button">
                        Tente Novamente
                    </button>
                    <button onClick={() => location.reload()} className="over-button">
                        Sair
                    </button>
                </div>        
            </section>
        </div>
    )
}

export default GameOver