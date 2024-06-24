import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import SomeComponent from "./hooks/SomeComponent"; // Corrigir o caminho da importação

function App() {
  return (
    <ThemeProvider>
      <SomeComponent />
    </ThemeProvider>
  );
}

export default App;
