import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import "./i18n.js";

function App() {

  return (
    <main className="" style={{ fontFamily: "Lateef" }}  >
      <Router>
        <Routes className="min-h-screen">
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
