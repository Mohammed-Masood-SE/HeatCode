import styles from "./Home.module.css"
import questions from "../../Data/questions";
import {useState} from "react"
import Details from "../Details/Details";
function Home() {
    const [selectedQuestion,setSelectedQuestion] = useState(false)
    const [displayQuestions,setDisplayQuestion] = useState(questions)

    const searchHandle = (search)=>{
        let filteredSearch = questions.filter((q)=> q.questionName.toLowerCase().includes(search.toLowerCase()))
        setDisplayQuestion(filteredSearch)
    }

    return (
      <div className={styles.homeWrapper}>
        {!selectedQuestion && <div>
            <div className={styles.searchBarWrapper}>
                <input onChange={(e)=>searchHandle(e.target.value)} placeholder="Search For A Question"></input>
            </div>
            <div className={styles.questionsWrapper}>
                {displayQuestions.map((q)=><div key={q.leetNumber} className={styles.questionWrapper} onClick={()=>setSelectedQuestion(q)}>
                    <h3 className={q.difficulty === "Easy"?styles.easy:q.difficulty === "Hard"?styles.hard:styles.medium}>{q.leetNumber}. {q.questionName}</h3>
                </div>)}
            </div>
        </div>}
        {selectedQuestion && <Details question={selectedQuestion} setSelectedQuestion={setSelectedQuestion}/>}
      </div>
    );
  }
  
  export default Home;
  