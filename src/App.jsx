import { useEffect, useState } from 'react'
import Start from './components/Start'
import Quiz from './components/Quiz'
import Question from './components/Question'
import { nanoid } from 'nanoid'

export default function App() {

  const [isQuiz, setIsQuiz] = useState(false)
  const [quizData, setQuizData] = useState([])

  useEffect(() => {
      fetch("https://opentdb.com/api.php?amount=4&difficulty=easy&type=multiple")
          .then(res => res.json())
          .then(data => setQuizData(data.results))
  }, [])

  const quizElements = quizData.map(el=>{
      const id = nanoid()
      const randomIndex = Math.floor(Math.random() * (el.incorrect_answers.length + 1))
  
      return (
        <Question 
          key={id}
          id={id}
          body={el.question}
          answer={el.correct_answer}
          options={el.incorrect_answers}
          randomIndex={randomIndex}
        />
      )
    })

  return (
    <main>
      {!isQuiz ? <Start startQuiz={()=>{setIsQuiz(true)}} /> : <Quiz quizElements={quizElements} />}
    </main>
  )
}

