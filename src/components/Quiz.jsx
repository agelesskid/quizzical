export default function Quiz() {
    return (
        <div className="quiz">
            <img src="/images/small-yellow-blob.png" id='small-yellow-blob' alt="Small yellow blob" />
            <img src="/images/small-blue-blob.png" id='small-blue-blob' alt="Small blue blob" />
            <div className="question-wrapper">
                <h2 className="question">How would one say goodbye in Spanish?</h2>
                <div className="answers-wrapper">
                    <button type="button" className="answer-btn">Adiós</button>
                    <button type="button" className="answer-btn">Hola</button>
                    <button type="button" className="answer-btn">Au Revoir</button>
                    <button type="button" className="answer-btn">Salir</button>
                </div>
            </div>
            <div className="question-wrapper">
                <h2 className="question">How would one say goodbye in Spanish?</h2>
                <div className="answers-wrapper">
                    <button type="button" className="answer-btn">Adiós</button>
                    <button type="button" className="answer-btn">Hola</button>
                    <button type="button" className="answer-btn">Au Revoir</button>
                    <button type="button" className="answer-btn">Salir</button>
                </div>
            </div>
            <div className="question-wrapper">
                <h2 className="question">How would one say goodbye in Spanish?</h2>
                <div className="answers-wrapper">
                    <button type="button" className="answer-btn">Adiós</button>
                    <button type="button" className="answer-btn">Hola</button>
                    <button type="button" className="answer-btn">Au Revoir</button>
                    <button type="button" className="answer-btn">Salir</button>
                </div>
            </div>
            <div className="question-wrapper">
                <h2 className="question">How would one say goodbye in Spanish?</h2>
                <div className="answers-wrapper">
                    <button type="button" className="answer-btn">Adiós</button>
                    <button type="button" className="answer-btn">Hola</button>
                    <button type="button" className="answer-btn">Au Revoir</button>
                    <button type="button" className="answer-btn">Salir</button>
                </div>
            </div>
            <button className="main-btn" id="check-answers-btn">Check answers</button>
        </div>
    )
}