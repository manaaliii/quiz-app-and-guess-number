import React, { useState } from 'react';
import Question from './Question.tsx';
import '../CSS/QuestionList.css';
import '../CSS/GeneralStyle.css';


// Question object type
type questions = {
    question: string,
    options: string[],
    answerIndex: number
}


// Question list
const Questions: questions[] =  [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answerIndex: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Jupiter", "Venus", "Saturn"],
        answerIndex: 0
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
        answerIndex: 0
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        answerIndex: 1
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Gold", "Silver", "Carbon"],
        answerIndex: 0
    },
    {
        question: "In which year did World War II end?",
        options: ["1945", "1939", "1941", "1943"],
        answerIndex: 0
    },
    {
        question: "Who is the author of 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "J.K. Rowling", "George Orwell", "Ernest Hemingway"],
        answerIndex: 0
    },
    {
        question: "What is the capital of Japan?",
        options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
        answerIndex: 2
    },
    {
        question: "Which famous scientist developed the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"],
        answerIndex: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answerIndex: 3
    }
];



// Question list component
const QuizList:React.FC = () => {

    // total for the score of user
    const [total, setTotal] = useState<number>(0);

    // submit state to check if the user has submitted the quiz
    const [submit, setSubmit] = useState<boolean>(false);

    // current question number to keep track of the question
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);

    // selected items array to store chosen answer 
    const [selectedItems, setSelectedItems] = useState<(number | null) []>(Array(Questions.length).fill(null));

    // handle next and previous question
    const handleNextQuestion = () => setCurrentQuestion(currentQuestion + 1);
    const handlePrevQuestion = () => setCurrentQuestion(currentQuestion - 1);


    // function to update the selectedItem when user selects any option
    const handleSelectedItem = (index: number) => {
        const newSelectedItems = [...selectedItems];
        newSelectedItems[currentQuestion] = index;
        setSelectedItems(newSelectedItems);
    }

    const handleSubmit = () => {
        // ask user, If they want to submit the quiz
        const userConfirmation:boolean = window.confirm("Do you want to submit? Click 'OK' to proceed or 'Cancel' to cancel.");


        // if user confirms, set submit to true and calculate the score
        if (userConfirmation) {
            setSubmit(true);
            let total = 0;
            selectedItems.forEach((item, index)=>{
                if(item === Questions[index].answerIndex){
                    total++;
                }
            })
            setTotal(total);
        } 
        
    }

    return(
       <>
       {/* show the question */}
       {!submit && <h2>Welcome to Quiz! </h2>   }
        <div className='container flex--column'>
            {!submit ? (
                <>
                <Question index={currentQuestion} quiz={Questions[currentQuestion]} selectedItem={selectedItems[currentQuestion]} handleSelectedItem={handleSelectedItem}  />
                <div className='btn--container'>
                <button className='prev simple--button' onClick={handlePrevQuestion} disabled={currentQuestion===0}>Prev</button>
                <button className='next simple--button' onClick={handleNextQuestion} disabled={currentQuestion===Questions.length-1}>Next</button>
                </div>
                <br />
                <button className='submit  simple--button' onClick={()=>handleSubmit()}> Submit </button>
                </>
            ) :
            // if user has submitted the quiz, show the score
            <h2>you have scored {total}/{Questions.length}</h2>}
            
        </div>
       </>
    )
}


export default QuizList;
