export default function Quiz(props) {
    return (
        <div className="quiz">
            <img src="/images/small-yellow-blob.png" id='small-yellow-blob' alt="Small yellow blob" />
            <img src="/images/small-blue-blob.png" id='small-blue-blob' alt="Small blue blob" />
            {props.quizElements}
            <button className="main-btn" id="check-answers-btn">Check answers</button>
        </div>
    )
}