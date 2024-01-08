import './App.css';
import QuestionList from "./components/QuestionList.tsx";
import GuessNumber from "./components/GuessNumber.tsx";

function App() {
  return (
    <div className="App">
        {/* Quiz component */}
        <QuestionList />

        {/* Guess Number Game component */}
        {/* <GuessNumber /> */}
    </div>
  );
}

export default App;
