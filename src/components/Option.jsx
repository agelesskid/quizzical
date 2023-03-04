export default function Answer(props){

    const isAnswer = props.answer === props.body ? true : false

    return (
        <button type="button" className="option-btn" data-answer={isAnswer} dangerouslySetInnerHTML={{__html: props.body}}></button>
    )
}