import { useRef, useState } from "react";
import styles from "./Quiz.module.scss";
import { quizData } from "../../assets/QuizData";

const Quiz = () => {
  let [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(quizData[index]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let option_list: React.RefObject<HTMLElement | null>[] = [
    Option1,
    Option2,
    Option3,
    Option4,
  ];

  const checkAnswer = (e: React.MouseEvent<HTMLElement>, ans: number) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.currentTarget.classList.add(styles.correct);

        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.currentTarget.classList.add(styles.wrong);
        setLock(true);
        option_list[question.ans - 1].current?.classList.add(styles.correct);
      }
    }
  };

  const handleNextClick = () => {
    if (lock === true) {
      if (index === quizData.length - 1) {
        setResult(true);
      }
      setIndex(++index);
      setQuestion(quizData[index]);
      setLock(false);
      option_list.map((option) => {
        option.current?.classList.remove(styles.wrong);
        option.current?.classList.remove(styles.correct);
        return null;
      });
    }
  };
  const handleResetClick = () => {
    setIndex(0);
    setQuestion(quizData[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  };
  return (
    <>
      <h2>4. Quiz </h2>
      {result ? (
        <div className={styles.container}>
          {score <= 1 && (
            <p>
              You scored {score} out of {quizData.length}. Great effort! Try
              again to improve your score!
            </p>
          )}
          {score >= 2 && score < 4 && (
            <p>
              Nice job! You answered {score} questions correctly out of
              {quizData.length}. Keep up the good work!
            </p>
          )}
          {score >= 4 && (
            <p>
              Congratulations! You got {score} out of {quizData.length} correct!
              Well done!
            </p>
          )}

          <button className={styles[`reset-button`]} onClick={handleResetClick}>
            Reset
          </button>
        </div>
      ) : (
        <div className={styles.container}>
          <h3 className={styles.question}>
            {index + 1}. {question.question}
          </h3>
          <ul className={styles.responses}>
            <li
              ref={Option1}
              onClick={(e) => {
                checkAnswer(e, 1);
              }}
            >
              {question.option1}
            </li>
            <li
              ref={Option2}
              onClick={(e) => {
                checkAnswer(e, 2);
              }}
            >
              {question.option2}
            </li>
            <li
              ref={Option3}
              onClick={(e) => {
                checkAnswer(e, 3);
              }}
            >
              {question.option3}
            </li>
            <li
              ref={Option4}
              onClick={(e) => {
                checkAnswer(e, 4);
              }}
            >
              {question.option4}
            </li>
          </ul>
          <button className={styles[`next-button`]} onClick={handleNextClick}>
            Next
          </button>
          <p>
            {index + 1} of {quizData.length} questions
          </p>
        </div>
      )}
    </>
  );
};

export default Quiz;
