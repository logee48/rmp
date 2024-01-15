import { Route, Routes } from "react-router-dom";
import { Login, Signup, Test, College, Prof, ProfR } from "./pages";
// import { College } from "./pages/test_files"
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/test" element={<Test />} />
        <Route path="/college" element={<College />} />
        <Route path="/prof" element={<Prof />} />
        <Route path="/profr" element={<ProfR />} />
      </Routes>
    </div>
  );
}

export default App;