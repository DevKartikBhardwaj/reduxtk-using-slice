import { useDispatch, useSelector } from "react-redux";
import {
  clearValue,
  decrement,
  increment,
  incrementByAmount,
} from "./Reducers/counter";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        IncrementByAmount
      </button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(clearValue())}>Clear</button>
    </div>
  );
}

export default App;
