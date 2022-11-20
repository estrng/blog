import { useState } from "react";
import { Providers } from "./components/Providers";
import { Routes } from "./routes/indext";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Providers>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Providers>
  );
}

export default App;
