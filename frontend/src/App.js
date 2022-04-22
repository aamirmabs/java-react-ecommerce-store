import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.js";
import AddIndoorPlant from "./components/AddIndoorPlant";
import ShowIndoorPlant from "./components/ShowIndoorPlant";
import AddOutdoorPlant from "./components/AddOutdoorPlant";
import ShowOutdoorPlant from "./components/ShowOutdoorPlant";
import AddTool from "./components/AddTool";
import ShowTool from "./components/ShowTool";
import AddAccessory from "./components/AddAccessory";
import ShowAccessories from "./components/ShowAccessories";

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
          <Route path="/tools" element={<ShowTool />}></Route>
          <Route path="/tools/add" element={<AddTool />}></Route>
          <Route path="/accessories" element={<ShowAccessories />}></Route>
          <Route path="/accessories/add" element={<AddAccessory />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
