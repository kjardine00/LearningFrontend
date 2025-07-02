import { useState } from "react";

function Counter() {
  const [array, setArray] = useState([]);

  return (
    <>
      <h1>{array.toString()}</h1>
      <button onClick={() => setArray((prevArray) => [...prevArray, "+1"])}>
        +1
      </button>
      <button onClick={() => setArray((prevArray) => [...prevArray, "-1"])}>
        -1
      </button>
      <button onClick={() => setArray([])}>Reset</button>
    </>
  );
}

export default Counter;
