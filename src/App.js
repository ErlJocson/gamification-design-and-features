import "./App.css";
import {
  LoginPage,
  Navbar,
  MainPage,
  YourStandings,
  Champions,
  TeamChamps,
  Shop,
  PracticeTracks,
} from "./components/Pages";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

function RouterComponent() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login";

  return (
    <>
      {hideNavbar ? null : <Navbar />}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" exact element={<MainPage />} />
        <Route path="/your-standing" exact element={<YourStandings />} />
        <Route path="/champions" exact element={<Champions />} />
        <Route path="/team-champs" exact element={<TeamChamps />} />
        <Route path="/shop" exact element={<Shop />} />
        <Route path="/practice-tracks" exact element={<PracticeTracks />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <>
      <Router>
        <RouterComponent />
      </Router>
    </>
  );
}

export default App;
