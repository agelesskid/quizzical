import { nanoid } from 'nanoid'
import Answer from './Answer'

export default function Question(props) {

    const optionsArr = props.options
    
    optionsArr.splice(props.randomIndex, 0, props.answer)

    const answerElements = optionsArr.map(el=>{
        const answerId = nanoid()

        return <Answer key={answerId} body={el}/>
    })

    return (
        <div className="question-wrapper">
            <h2 className="question" dangerouslySetInnerHTML={{__html: props.body}}></h2>
            <div className="answers-wrapper">
                {answerElements}
            </div>
        </div>
    )
}