import Quiz from "./components/Quiz/Quiz";
import RandomColor from "./components/RandomColor/RandomColor";
import RandomImage from "./components/RandomImage/RandomImage";
import RandomQuotes from "./components/RandomQuotes/RandomQuotes";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import Todo from "./components/TodoList/ToDo";

function App() {
  return (
    <>
      <Todo />
      <RandomQuotes />
      <RandomColor />
      <RandomImage />
      <Quiz />
      <TicTacToe />
    </>
  );
}

export default App;
