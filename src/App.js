import "./App.css";
import { Button } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import TwoBoxLayout from "./layouts/TwoBoxLayout";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TwoBoxLayout></TwoBoxLayout>}></Route>
      </Routes>
    </div>
  );
}

export default App;
