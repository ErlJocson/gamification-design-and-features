import "./App.css";
import { LoginPage, Navbar, MainPage } from "./components/Pages";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" exact element={<MainPage />} />
        </Routes>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
