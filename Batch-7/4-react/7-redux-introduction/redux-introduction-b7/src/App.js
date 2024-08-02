import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/duck/counter";

function App() {
  const count = useSelector((state) => state?.counter?.count);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };
  return (
    <div className="App">
      <h2>Counter : {count}</h2>

      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
