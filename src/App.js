import "./App.css";
import { Button } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import TwoBoxLayout from "./layouts/TwoBoxLayout";
import Dashboard from "./layouts/Dashboard";
import Quiz from "./components/Quiz";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TwoBoxLayout></TwoBoxLayout>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/quiz/:id" element={<Quiz></Quiz>}></Route>
      </Routes>
    </div>
  );
}

export default App;
