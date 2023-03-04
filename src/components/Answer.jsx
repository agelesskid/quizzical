export default function Answer(props){
    return <button type="button" className="answer-btn" dangerouslySetInnerHTML={{__html: props.body}}></button>
}