import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import MusicCard from "./components/Music/MusicCard";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      {/* Navigation */}
      <NavBar/>
      {/* <MusicCard title={"Yeh Sham Masatani"} artist={"Kishor Kumar"} /> */}
      <Routes>
        <Route path="/" element={<Home/>}>
          {" "}
        </Route>
        <Route path="/social" element={<h1>Social</h1>}>
          {" "}
        </Route>
        <Route path="/login" element={<h1>Login</h1>}>
          {" "}
        </Route>
        <Route path="/signup" element={<h1>Signup</h1>}>
          {" "}
        </Route>

        {/* Protected */}
        <Route path="/library" element={<h1>Library</h1>}>
          {" "}
        </Route>
      </Routes>
    </>
  );
}

export default App;
