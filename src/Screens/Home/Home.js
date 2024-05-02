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

    const downloadQuestionPaper = () => {
        try {
            let completed = JSON.parse(localStorage.getItem("questions")) || [];
            let remainingQuestions = []
            while(completed.length < questions.length && remainingQuestions.length < 3){
                let randomNumber = Math.floor(Math.random() * questions.length);
                if(!completed.includes(randomNumber)){
                    completed.push(randomNumber)
                    remainingQuestions.push(randomNumber)
                }
            }
            if(completed.length >= questions.length){
                localStorage.setItem("questions",JSON.stringify([]))
            }else{
                localStorage.setItem("questions",JSON.stringify(completed))
            }
            let textContent = ``
            for(let i=0;i<remainingQuestions.length;i++){
                textContent += `${i+1}. ${questions[remainingQuestions[i]].questionName}\n\n${questions[remainingQuestions[i]].question}\n\n\n\n`
            }
            // Download Text File
            const blob = new Blob([textContent], { type: "text/plain" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = "Question-Paper.txt";
            document.body.appendChild(link);
            link.click();
            URL.revokeObjectURL(url);
            document.body.removeChild(link);
        } catch (e) {
            console.log(e);
        }
    };
    
    
    
    

    return (
      <div className={styles.homeWrapper}>
        {!selectedQuestion && <div>
            <button onClick={downloadQuestionPaper} className={styles.download}>Download Question Paper</button>
            <div className={styles.searchBarWrapper}>
                <input onChange={(e)=>searchHandle(e.target.value)} placeholder="Search For A Question"></input>
            </div>
            <div className={styles.questionsWrapper}>
                {displayQuestions.map((q)=><div key={q.leetNumber} className={styles.questionWrapper} 
                onClick={()=>{
                    setSelectedQuestion(q);
                    }}>
                    <h3 className={q.difficulty === "Easy"?styles.easy:q.difficulty === "Hard"?styles.hard:styles.medium}>{q.leetNumber}. {q.questionName}</h3>
                </div>)}
            </div>
        </div>}
        {selectedQuestion && <Details question={selectedQuestion} setSelectedQuestion={setSelectedQuestion}/>}
      </div>
    );
  }
  
  export default Home;
  