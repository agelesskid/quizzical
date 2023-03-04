import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import Option from './Option'

export default function Question(props) {

    const [options, setOptions] = useState(generateOptionsTemplate())

    useEffect(generateOptions, [])

    function generateOption() {
        return {
            id: nanoid(),
            body: '',
            isActive: false
        }
    }

    function generateOptionsTemplate() {
        const optionsArr = new Array(4).fill(0).map(()=>generateOption())
        return optionsArr
    }

    function generateOptions() {
        setOptions(prevOptions=>prevOptions.map((option, index)=>({
            ...option,
            body: props.optionsArr[index]
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



//     const [options, setOptions] = useState(generateOptionsTemplate())

//     useEffect(()=>{
    
//         props.optionsArr.map(el=>{
//             setOptions(prevOptions=>prevOptions.map(option=>{
//               return {
//                 ...option,
//                 body: el,
//               }
//             }))
//         })

//     }, [])

//     function generateOption() {
//         return {
//           id: nanoid(),
//           body: '',
//           isActive: false
//         }
//     }
    
//     function generateOptionsTemplate() {
//         const newOptions = new Array(4).fill(0).map(()=>generateOption())
//         return newOptions
//     }

//     function activateOption(id){
//         setQuiz(prevQuiz=>prevQuiz.map(question=>{
//           return question.options.map(option=>question.id === id ? {...option, isActive: true} : option)
//         }))
//     }

//     const optionsElements = options.map(el=>{
//         return <Option
//             isActive={el.isActive}
//             key={el.id}
//             body={el.body}
//             activateOption={()=>{activateOption(props.id)}}
//         />
//     })