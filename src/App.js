import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Modals from "./pages/Modals";
import Form from "./pages/Form";

import Navbar from "./components/NavbarComponent";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const App = () => {

  return (
    <div>
      <Router>
        <div>
          <Navbar />

          {/* 👇️ Wrap your Route components in a Routes component */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/modal" element={<Modals />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </div>
      </Router>
    </div >
  )
}

export default App;