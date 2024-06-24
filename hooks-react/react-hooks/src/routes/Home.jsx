import React, { useContext } from "react";
import HookUseState from "../components/HookUseState";
import HookUserReducer from "../components/HookUserReducer";
import HookUseEffect from "../components/HookUseEffect";
import { SomeContext } from "../components/HookUseContext";
import HookUseRef from "../components/HookUseRef";

const Home = () => {
  const contextValue = useContext(SomeContext);

  return (
    <div>
      <h1>HOME</h1>
      <HookUseState />
      <HookUserReducer />
      <HookUseEffect />
      <h2>Use Context</h2>
      <p>valor do Context: {contextValue}</p>
      <hr />
      <HookUseRef />
    </div>
  );
};

export default Home;
