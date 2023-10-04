import "./App.css";
import YoutubeDisplayer from "./pages/YoutubeDisplayer/YoutubeDisplayer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<YoutubeDisplayer />}></Route>
    </Routes>
  );
}

export default App;
