import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import Option from './Option'

export default function Question(props) {

    const [options, setOptions] = useState(generateOptionsTemplate())

    useEffect(()=>{
        if(!props.check){
            generateOptions()
        }
    }, [props.check])

    function generateOption() {
        return {
            id: nanoid(),
            body: '',
            isActive: false,
            isAnswer: false
        }
    }

    function generateOptionsTemplate() {
        const optionsArr = new Array(props.optionsArr.length).fill(0).map(()=>generateOption())
        return optionsArr
    }

    function generateOptions() {
        setOptions(prevOptions=>prevOptions.map((option, index)=>({
            ...option,
            body: props.optionsArr[index],
            isActive: false,
            isAnswer: props.optionsArr[index] === props.answer ? true : false
        })))
    }

    function activateOption(questionId, id) {
        if (props.id === questionId) {
            setOptions(prevOptions=>prevOptions.map(option=>{
                return option.id === id ? {...option, isActive: true} : {...option, isActive: false}
            }))
        }
    }

    const optionsElements = options.map(el=>{
        return <Option
            key={el.id}
            id={el.id}
            body={el.body}
            isActive={el.isActive}
            isAnswer={el.isAnswer}
            check={props.check}
            increaseScore={props.increaseScore}
            activateOption={()=>{activateOption(props.id, el.id)}}
        />
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