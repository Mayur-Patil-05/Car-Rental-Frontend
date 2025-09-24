import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Pages/Home";
import Bookings from "./Pages/Bookings";
import About from "./Pages/About";
import Login from "./Pages/Login";
import CarDetails from "./Pages/CarDetails";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cardetails/:carId" element={<CarDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
