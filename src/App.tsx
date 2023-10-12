import "./App.css";
import YoutubeDisplayer from "./pages/YoutubeDisplayer/YoutubeDisplayer";
// import Login from "./pages/auth/Login/Login";
// import Register from "./pages/auth/Register/Register";
// import PasswordRecovery from "./pages/auth/PasswordRecovery/PasswordRecovery";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<YoutubeDisplayer />}></Route>
      {/* <Route path="/" element={<Login />}></Route> */}
      {/* <Route path="/" element={<Register />}></Route> */}
      {/* <Route path="/" element={<PasswordRecovery />}></Route> */}
    </Routes>
  );
}

export default App;
