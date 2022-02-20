import "./styles/Games.css"

export function View(props){
    return (
        <main className = "view">
            <section className="container">
                <h2>
                WhatSong
                </h2>
                <div className="text-info">
                    Treine seu ouvido jogando
                </div>
            </section>
            <section className="name-games">
                <p>
                    Jogos
                </p>
            </section>
            <section className="games">
                <div className="item-games" onClick={() => props.set(1)}>
                    <p className="item-text">
                        Descubra o Acorde
                    </p>
                    <p className="item-sub-text">
                        Descubra qual é o acorde pelo som
                    </p>
                </div>
                <div className="item-games" onClick={() => props.set(2)}>
                    <p className="item-text">
                        Descubra a Nota
                    </p>
                    <p className="item-sub-text">
                        Descubra qual é a nota pelo som
                    </p>
                </div>
                <div className="item-games">
                    <p className="item-text">
                        Em Breve
                    </p>
                    <p className="item-sub-text">
                        Em desenvolvimento
                    </p>
                </div>
                <div className="item-games">
                    <p className="item-text">
                        Em Breve
                    </p>
                    <p className="item-sub-text">
                        Em desenvolvimento
                    </p>
                </div>
            </section>
        </main>
    )
}