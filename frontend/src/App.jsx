import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import APOD from "./pages/APOD";
import ISS from "./pages/ISS";
import Launches from "./pages/Launches";
import Weather from "./pages/Weather";
import News from "./pages/News";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <div className="hero">
          <h1>🚀 SpaceOps Mission Control</h1>

          <p>
            Real-time space intelligence dashboard powered by NASA,
            SpaceX, live ISS tracking, and space weather monitoring.
          </p>
        </div>

        <div className="content">
          <Routes>
            <Route path="/" element={<APOD />} />
            <Route path="/iss" element={<ISS />} />
            <Route path="/launches" element={<Launches />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;