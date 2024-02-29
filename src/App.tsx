import Quiz from "./components/Quiz/Quiz";
import RandomColor from "./components/RandomColor/RandomColor";
import RandomQuotes from "./components/RandomQuotes/RandomQuotes";
import Todo from "./components/TodoList/ToDo";

function App() {
  return (
    <>
      <Todo />
      <RandomQuotes />
      <Quiz />
      <RandomColor />
    </>
  );
}

export default App;
