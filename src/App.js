import "./App.css";
import { Route, Routes } from "react-router-dom";
import TwoBoxLayout from "./layouts/TwoBoxLayout";
import Dashboard from "./layouts/Dashboard";
import Quiz from "./components/Quiz";
import ErrorPage from "./layouts/ErrorPage";
import SideDrawer from "./components/navigation/SideDrawer";
import MainDashboard from "./components/MainDashboard";
import MainProfile from "./components/profile/MainProfile";
import QuizMaker from "./components/QuizMaker";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TwoBoxLayout></TwoBoxLayout>}></Route>
        <Route
          path="/dashboard"
          element={
            <Dashboard
              nav={<SideDrawer></SideDrawer>}
              main={<MainDashboard></MainDashboard>}
            />
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <Dashboard
              nav={<SideDrawer></SideDrawer>}
              main={<MainProfile></MainProfile>}
            />
          }
        ></Route>
        <Route
          path="/createQuiz"
          element={
            <Dashboard
              nav={<SideDrawer></SideDrawer>}
              main={<QuizMaker></QuizMaker>}
            />
          }
        ></Route>
        <Route path="/quiz/:id" element={<Quiz></Quiz>}></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
