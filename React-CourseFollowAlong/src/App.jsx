import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Nav from "./components/Nav.jsx";
import UserPage from "./pages/UserPage.jsx";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<UserPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
