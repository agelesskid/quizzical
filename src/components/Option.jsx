import { useEffect } from "react"

export default function Option(props){

    useEffect(()=>{
        if(props.check && props.isAnswer && props.isActive) {
            props.increaseScore()
        }
    }, [props.check])

    function color(){
        if(props.check){
            if(props.isAnswer) {
                return "#94D7A2"
            } else if (!props.isAnswer && props.isActive)
                return "#F8BCBC"
        } else if (props.isActive) {
            return "#D6DBF5"
        }
    }

    function backgroundColor(){
        return color() ? color() : "transparent"
    }

    function borderColor(){
        return color() ? color() : "var(--main-dark-color)"
    }

    const styles = {
        backgroundColor: backgroundColor(),
        borderColor: borderColor(),
        opacity: props.check && !props.isAnswer ? '50%' : '100%'
    }

    return (
        <button type="button" className="option-btn" onClick={!props.check ? props.activateOption : undefined} style={styles} dangerouslySetInnerHTML={{__html: props.body}}></button>
    )
}