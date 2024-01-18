import { Route, Routes } from "react-router-dom";
import { Test, College, Prof, ProfR } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<College />} />
        <Route path="/test" element={<Test />} />
        <Route path="/prof" element={<Prof />} />
        <Route path="/profr" element={<ProfR />} />
      </Routes>
    </div>
  );
}

export default App;