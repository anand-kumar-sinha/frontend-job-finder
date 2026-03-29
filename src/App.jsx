import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import FindJobs from "./pages/FindJobs/FindJobs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/find-jobs" element={<FindJobs />} />
    </Routes>
  );
}

export default App;
