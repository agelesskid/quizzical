import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import Start from './components/Start'
import Quiz from './components/Quiz'
import Question from './components/Question'

export default function App() {

  const [quiz, setQuiz] = useState(generateQuizTemplate())
  const [quizData, setQuizData] = useState([])
  const [isQuiz, setIsQuiz] = useState(false)
  const [check, setCheck] = useState(false)
  const [score, setScore] = useState(0)

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
        .then(res => res.json())
        .then(data => setQuizData(data.results))
  }, [check])

  function generateQuestion() {
    return {
      id: nanoid(),
      body: '',
      answer: '',
      optionsArr: []
    }
  }

  function generateQuizTemplate() {
    const newQuiz = new Array(5).fill(0).map(()=>generateQuestion())
    return newQuiz
  }
  
  function generateQuiz(){
    setQuiz(prevQuiz=>prevQuiz.map((questionEl, index)=>{

      const randomIndex = Math.floor(Math.random() * (quizData[index].incorrect_answers.length + 1))
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
    setCheck(false)
  }

  function checkAnswers() {
    setCheck(true)
  }

  function increaseScore(){
    setScore(prevScore=>prevScore+1)
  }

  const quizElements = quiz.map(el=>{
      return (
        <Question 
          key={el.id}
          id={el.id}
          body={el.body}
          answer={el.answer}
          optionsArr={el.optionsArr}
          check={check}
          increaseScore={increaseScore}
        />
      )
    })

  const styles = {
    height: !isQuiz && '100vh'
  }

  return (
    <main style={styles}>
      {!isQuiz
      ? <Start
          startQuiz={startQuiz}
          isData={quizData.length > 0 ? true : false}
        /> 
      : <Quiz 
          quizElements={quizElements} 
          checkAnswers={checkAnswers} 
          check={check} 
          reset={startQuiz}
          score={score}
        />}
    </main>
  )
}