export default function Option(props){

    const styles = {
        backgroundColor: props.isActive ? "#D6DBF5" : "transparent",
        borderColor: props.isActive ? "#D6DBF5" : "var(--main-dark-color)"
    }

    return (
        <button type="button" className="option-btn" onClick={props.activateOption} style={styles} dangerouslySetInnerHTML={{__html: props.body}}></button>
    )
}