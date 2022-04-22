import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.js";
import AddIndoorPlant from "./components/AddIndoorPlant";
import ShowIndoorPlant from "./components/ShowIndoorPlant";
import AddOutdoorPlant from "./components/AddOutdoorPlant";
import ShowOutdoorPlant from "./components/ShowOutdoorPlant";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<ShowIndoorPlant />}></Route>
          <Route path="/" element={<ShowIndoorPlant />}></Route>
          <Route path="/indoor-plants" element={<ShowIndoorPlant />}></Route>
          <Route path="/indoor-plants/add" element={<AddIndoorPlant />}></Route>
          <Route path="/outdoor-plants" element={<ShowOutdoorPlant />}></Route>
          <Route
            path="/outdoor-plants/add"
            element={<AddOutdoorPlant />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
