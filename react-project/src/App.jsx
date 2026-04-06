import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const name = "Abhishek";

  return (
    <div>
      <h1>Hello {name} 🚀</h1>
      <p>Learning React step by step</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
     <button onClick={()=> setCount(0)}>reset</button>
     <button onClick={() => setCount(count - 1)}> Decrease </button>
      <h2>Count is {count}</h2>
    </div>
  );
}

export default App;