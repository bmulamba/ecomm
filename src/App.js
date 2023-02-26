import { Header } from "./components/header/Header";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/Pages/About";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" component={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
