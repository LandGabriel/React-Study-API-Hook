import { useEffect, useState, useRef } from "react";

const HookUseRef = () => {
  const numberRef = useRef(0);
  const [counter, setCounter] = useState(0);
  const [counterB, setCounterB] = useState(0);

  useEffect(() => {
    numberRef.current += 1;
  });

  return (
    <div>
      <h2>UseRef</h2>
      <p>O componente Renderizou: {numberRef.current}</p>
      <p>Counter 1: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>
        Incrementar Counter 1
      </button>
      <p>Counter 2: {counterB}</p>
      <button onClick={() => setCounterB(counter + 1)}>
        Incrementar Counter 2
      </button>
    </div>
  );
};

export default HookUseRef;
