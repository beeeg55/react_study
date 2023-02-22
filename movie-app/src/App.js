import Main from "./routes/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
