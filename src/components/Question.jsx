import { nanoid } from 'nanoid'
import Option from './Option'

export default function Question(props) {

    const optionsArr = props.options
    
    optionsArr.splice(props.randomIndex, 0, props.answer)

    const optionsElements = optionsArr.map(el=>{
        const optionsId = nanoid()

        return <Option key={optionsId} answer={props.answer} body={el}/>
    })

    return (
        <div className="question-wrapper">
            <h2 className="question" dangerouslySetInnerHTML={{__html: props.body}}></h2>
            <div className="options-wrapper">
                {optionsElements}
            </div>
        </div>
    )
}