import {useState} from "react"

function App() {

  const questions = [
    {
      questionText: "It is used for styling of html document?",
      answerOptions: [
        { answerText: "Bootsrap", isCorrect: false },
        { answerText: "Less", isCorrect: false },
        { answerText: 'Css', isCorrect: true },
        { answerText: "Tailwind", isCorrect: false },
      ],
    },
    {
      questionText: "Child class inherits the attributes and behavious of parent class",
      answerOptions: [
        { answerText: "Encapsulation", isCorrect: false },
        { answerText: "Inheritance", isCorrect: true },
        { answerText: "Abstraction", isCorrect: false },
        { answerText: "Method", isCorrect: false },
      ],
    },
    {
      questionText: "It is a function in an object",
      answerOptions: [
        { answerText: "Object", isCorrect: false },
        { answerText: "Method", isCorrect: true },
        { answerText: "Class", isCorrect: false },
        { answerText: "closure", isCorrect: false },
      ],
    },
    {
      questionText: "It is a JavaScript Library",
      answerOptions: [
        { answerText: "Less", isCorrect: false },
        { answerText: "Bootstrap", isCorrect: false },
        { answerText: "Webpack", isCorrect: false },
        { answerText: "react", isCorrect: true },
      ],
    },
    {
      questionText: "It is an instance of a class",
      answerOptions: [
        { answerText: "Encapsulation", isCorrect: false },
        { answerText: "Function", isCorrect: false },
        { answerText: "Method", isCorrect: false },
        { answerText: "object", isCorrect: true },
      ]
    }

  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuetions = currentQuestion + 1;
    
    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions);
    }
    else {
      setShowScore(true)
    }
  }

  return (
    <div className="container">
      <h1 className='header'>Quiz</h1>
      <div className="app">
        {showScore ? (
          <div className='score-section'>
            You scored {score} out of {questions.length}
            
          </div>
        )
          :
          (
            <div>
              <div className='question-section'>
                <div className='question-count'>
                  <span>Question {currentQuestion +1}</span>
                </div>
                <div className='question-text'>
                  {questions[currentQuestion].questionText}
                </div>
              </div>

              <div className='answer-section'>
                {
                  questions[currentQuestion].answerOptions.map((answerOptions) => (<ul>
                    <li>
                      <button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
                    </li>
                  </ul>
                    
                  
                  ))
                }
                
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

export default App;
