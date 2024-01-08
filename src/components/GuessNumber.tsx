import React, { useState } from "react";
import '../CSS/GuessNumber.css';
import '../CSS/GeneralStyle.css';


// set min max value for the range of random number
const min = 1;
const max = 20;


// function which returns generated random integer
const generateRandomNumber = () =>Math.floor(Math.random() * (max - min) + min);

const GuessNumber: React.FC = () => {
    // input state to keep the track of the integer entered by user
    const [input, setInput] = useState<number | null>(null);
    // set random value 
    const [random, setRandom] = useState<number>(generateRandomNumber());
    // set completeGame to true when user guesses the correct number
    const [completeGame, setCompleteGame] = useState<boolean>(false);


    // function to handle the guess button
    const handleGuess = () => {
        // if user has entered the number before submitting
        if(input !== null){
            if(input === random){
                alert('Congratulations! You guessed the correct number!');
                setCompleteGame(true);
            }else if(input < random){
                alert('Too low! Try a higher number.');
            }else{
                alert('Too high! Try a lower number.');
            }
        }
        else{
            alert(`Enter the number between ${min} and ${max}`);
        }
    }


    // if user enters play again button, resetting the game 
    const handlePlayAgain = () => {
        setInput(null);
        setRandom(generateRandomNumber());
        setCompleteGame(false);
    }

    return(
        <div className="container flex--column">
            <h1>Guess the number Game!</h1>
            <h3>Enter the number between {min} and {max} below!</h3>
            <input type="number" value={input || ''} min='1' max='20' 
            onChange={(event)=> setInput(parseInt(event.target.value))}/>
            <br />
            {/* Guess button while user is active playing the game */}
            {!completeGame && <button className="guess simple--button" type="button" onClick={handleGuess}>Guess</button>}
            <br />
            {/* Play again button, if user has finished the game */}
            {completeGame && <button className="play simple--button" type="button" onClick={()=>handlePlayAgain()}>Play Again</button>}
        </div>
    )
}

export default GuessNumber;