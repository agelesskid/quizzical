export default function Start(props) {
    return (
        <>
            <img src="/images/big-yellow-blob.png" id='big-yellow-blob' alt="Big yellow blob" />
            <img src="/images/big-blue-blob.png" id='big-blue-blob' alt="Big blue blob" />
            <h1>Quizzical</h1>
            <button
                className="main-btn"
                type='button'
                id="start-btn"
                disabled={!props.isData}
                onClick={props.startQuiz}
            >
                {props.isData ? "Start quiz" : "Loading..."}
            </button>
        </>
    )
}