import { useState } from "react";
const HookUseState = () => {
  let userName = "Jorgin";
  const [name, setName] = useState("Gabriel");

  const changeNames = () => {
    userName = "Jorgin Silveira";

    setName("Land Gabriel");
  };
  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(age);
  };
  return (
    <div>
      <h2>use state</h2>
      <p>Variável: {userName}</p>
      <p>UseState: {name}</p>
      <button onClick={changeNames}>Mudar Nomes</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
      <p>You are {age} anos.</p>
      <hr />
    </div>
  );
};

export default HookUseState;
