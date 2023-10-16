import "./App.css";
// import Layout from "./components/Layout/Layout";
import YoutubeDisplayer from "./pages/YoutubeDisplayer/YoutubeDisplayer";
import Login from "./pages/auth/Login/Login";
import Register from "./pages/auth/Register/Register";
import PasswordRecovery from "./pages/auth/PasswordRecovery/PasswordRecovery";
import RequireAuth from "./components/auth/RequireAuth";
import PersistLogin from "./components/auth/PersistentLogin";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}
      {/* Public Routes */}
      <Route path="/" element={<Login />}></Route>
      <Route path="register" element={<Register />}></Route>
      <Route path="passwordrecovery" element={<PasswordRecovery />}></Route>
      <Route element={<PersistLogin />}>
        <Route element={<RequireAuth />}>
          <Route path="ytvideomanager" element={<YoutubeDisplayer />}></Route>
          {/* Protected Routes */}
          <Route
            path="usermanagement"
            element={<h1>user management</h1>}
          ></Route>
        </Route>
      </Route>
      {/* Not found Routes */}
      <Route path="*" element={<h1>Not Found</h1>}></Route>
      {/* </Route> */}
    </Routes>
  );
}

export default App;
