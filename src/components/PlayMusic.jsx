export const PlayMusic = function(props){
    new Audio(props.src).play()
    return null
}