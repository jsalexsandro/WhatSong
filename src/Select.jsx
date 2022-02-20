import "./styles/Select.css"


// function HR(){
//     return <span className="line">

//     </span>
// }

function Info(props){
    return (
        <div className="info">
            <p>{props.text}</p>
        </div>
    )
}

function SelectElement(props){
    return <button onClick={() => {
        props.sLevel(props.levelValue)
        props.sType(props.type)
        props.set(10)
    }} className="selectElement">
        <p className="acords">{props.text}</p>
    </button>
}

const RenderSelect = function(props){
    const listTreinament = props.list
    
    return (
        <>
            {
                <>
                {
                    listTreinament.map((i) => {
                        if (i.type == "info"){
                            return <Info text = {i.text} />

                        } else {
                            return <SelectElement sType={props.sType} type={props.type} levelValue={i.component} sLevel={props.sLevel} set={props.set} text={i.text} />
                        }
                    })
                }
                </>
            }
            
        </>
    )
}

export function Select(props){
    return (
        <div className="select">
            <RenderSelect sType={props.sType} type={props.type} sLevel={props.sLevel} set={props.set} list={props.list} />
        </div>
    )
}