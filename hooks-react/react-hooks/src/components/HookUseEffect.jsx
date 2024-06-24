import React, { useEffect, useState } from "react";

const HookUseEffect = () => {
  const [number, setNumber] = useState(1);
  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    console.log("I am executed now");
  });

  useEffect(() => {
    console.log("I will be executed just one time");
  }, []);

  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("I am executed just when anotherNumber changes");
    }
  }, [anotherNumber]);

  const changeSomething = () => {
    setNumber(number + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Hello World");
      setAnotherNumber(anotherNumber + 1);
    }, 2000);
    return () => clearTimeout(timer);
  }, [anotherNumber]);

  return (
    <div>
      <h3>Use effect</h3>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Execute</button>
      <hr />
      <p>Another Number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        Change Another Number
      </button>
    </div>
  );
};

export default HookUseEffect;
