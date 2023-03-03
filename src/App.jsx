import { useEffect, useState } from 'react'
import Start from './components/Start'
import Quiz from './components/Quiz'
import Question from './components/Question'
import { nanoid } from 'nanoid'

export default function App() {

  const [isQuiz, setIsQuiz] = useState(false)
  const [quizData, setQuizData] = useState([])
  const [quizElements, setQuizElements] = useState(null)

  useEffect(() => {
      fetch("https://opentdb.com/api.php?amount=4&difficulty=easy&type=multiple")
          .then(res => res.json())
          .then(data => setQuizData(data.results))

          setQuizElements(
             quizData.map(el=>{

              const id = nanoid()
          
              const options = el.incorrect_answers
              options.push(el.correct_answer)
          
              return (
                <Question 
                  key={id}
                  id={id}
                  body={el.question}
                  answer={el.correct_answer}
                  options={options}
                />
              )
            })
          )
  }, [isQuiz])

  return (
    <main>
      {!isQuiz ? <Start startQuiz={()=>{setIsQuiz(true)}} /> : <Quiz quizElements={quizElements} />}
    </main>
  )
}

