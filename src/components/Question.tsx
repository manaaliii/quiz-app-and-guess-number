import React from 'react';
import '../CSS/Question.css';
import '../CSS/GeneralStyle.css';

type questions = {
    question: string,
    options: string[]
}

interface QuestionProps {
    index: number;
    quiz: questions;
    selectedItem: number | null;
    handleSelectedItem: (index: number) => void;
}


const Question:React.FC<QuestionProps> = ({index, quiz, selectedItem, handleSelectedItem}) => {
    const {question, options} = quiz;

    return(
        <>
            <h3>{index+1}. {question}</h3>
            {
                options.map((option, index)=>{
                    return(
                        <div className='options' key={index}>
                            <button onClick={()=>handleSelectedItem(index)} style={{backgroundColor: index===selectedItem ? "coral" : "white"}}>{index+1}</button>
                            {option}
                        </div>
                    )
                })
            }
        </>
    )
}

export default Question;