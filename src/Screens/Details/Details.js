import styles from "./Details.module.css"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import questions from "../../Data/questions";

function Details({question,setSelectedQuestion,setDisplayQuestion}) {
    return (
      <div className={styles.detailsWrapper}>
        <h1 className={styles.close} onClick={()=>{setSelectedQuestion(false);setDisplayQuestion(questions)}}>X</h1>
        <a href={question.leetLink} className={question.difficulty === "Easy"?styles.easy:question.difficulty === "Hard"?styles.hard:styles.medium}>{question.leetNumber >= 10000?"":question.leetNumber + "."} {question.questionName}</a>
        <p>{question.question}</p>
        <div className={styles.codeBlockWrapper}>
            <SyntaxHighlighter language="python" style={darcula}>
                {question.answer}
            </SyntaxHighlighter>
        </div>
        <p className={styles.tip}>Tip : {question.tip}</p>
      </div>
    );
  }
  
  export default Details;
  