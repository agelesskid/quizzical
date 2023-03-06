export default function Quiz(props) {

    const btn = props.check
                ? <button className="main-btn" id="check-answers-btn" onClick={props.reset}>Play again</button>
                : <button className="main-btn" id="check-answers-btn" onClick={props.checkAnswers}>Check answers</button>

    const message = <p className="question">{`You scored ${props.score}/${props.quizElements.length} correct answers`}</p>

    return (
        <div className="quiz">
            <img src="/images/small-yellow-blob.png" id='small-yellow-blob' alt="Small yellow blob" />
            <img src="/images/small-blue-blob.png" id='small-blue-blob' alt="Small blue blob" />
            {props.quizElements}
            <div className="btn-wrapper">
                {props.check && message}
                {btn}
            </div>
        </div>
    )
}