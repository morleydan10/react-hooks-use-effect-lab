import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code

useEffect(() => {
  
  const timerId = setTimeout(() => {
    setTimeRemaining((prevTime) => prevTime - 1)
  }, 1000);

  return () => clearTimeout(timerId);

},[]
);

  function handleAnswer(isCorrect) {
    if (isCorrect){
      setTimeRemaining(10);
      onAnswered(isCorrect)
    } else {
      onAnswered(false);
      alert("That is incorrect doofus")
    };
  };

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
