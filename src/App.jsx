import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import Start from './components/Start'
import Quiz from './components/Quiz'
import Question from './components/Question'

export default function App() {

  const [quiz, setQuiz] = useState(generateQuizTemplate())
  const [quizData, setQuizData] = useState([])
  const [isQuiz, setIsQuiz] = useState(false)

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=4&difficulty=easy&type=multiple")
        .then(res => res.json())
        .then(data => setQuizData(data.results))
  }, [])

  function generateQuestion() {
    return {
      id: nanoid(),
      body: '',
      answer: '',
      optionsArr: []
    }
  }

  function generateQuizTemplate() {
    const newQuiz = new Array(4).fill(0).map(()=>generateQuestion())
    return newQuiz
  }
  
  function generateQuiz(){
    setQuiz(prevQuiz=>prevQuiz.map((questionEl, index)=>{

      const randomIndex = Math.floor(Math.random() * 4)
      const optionsArr = quizData[index].incorrect_answers
      optionsArr.splice(randomIndex, 0, quizData[index].correct_answer)

      return {
        ...questionEl,
        body: quizData[index].question,
        answer: quizData[index].correct_answer,
        optionsArr: optionsArr
      }
    }))
  }

  function startQuiz() {
    generateQuiz()
    setIsQuiz(true)
  }

  const quizElements = quiz.map(el=>{
      return (
        <Question 
          key={el.id}
          id={el.id}
          body={el.body}
          answer={el.answer}
          optionsArr={el.optionsArr}
        />
      )
    })

  return (
    <main>
      {!isQuiz ? <Start startQuiz={startQuiz} /> : <Quiz quizElements={quizElements} />}
    </main>
  )
}