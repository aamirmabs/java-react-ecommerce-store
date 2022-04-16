import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddIndoorPlant from "./components/AddIndoorPlant";
import Navbar from "./components/Navbar.js";
import ShowIndoorPlant from "./components/ShowIndoorPlant";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
