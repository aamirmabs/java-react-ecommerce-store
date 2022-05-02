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
import ShowProducts from "./components/ShowProducts";
import Homepage from "./components/Homepage";
import Cart from "./components/Cart";
import PaymentSuccess from "./components/PaymentSuccess";
import Login from "./components/Login";
import ProfilePage from "./components/ProfilePage";

import { CartProvider } from "./contexts/CartContext";
import SearchPage from "./components/SearchPage";
import { AuthProvider } from "./contexts/AuthContext";
import { orderContext, OrderProvider } from "./contexts/OrderContext";

function App() {
  return (
    <div>
      <AuthProvider>
        <CartProvider>
          <OrderProvider>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route index element={<Homepage />}></Route>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/products" element={<ShowProducts />}></Route>
                <Route
                  path="/indoor-plants"
                  element={<ShowIndoorPlant />}
                ></Route>
                <Route
                  path="/indoor-plants/add"
                  element={<AddIndoorPlant />}
                ></Route>
                <Route
                  path="/outdoor-plants"
                  element={<ShowOutdoorPlant />}
                ></Route>
                <Route
                  path="/outdoor-plants/add"
                  element={<AddOutdoorPlant />}
                ></Route>
                <Route path="/tools" element={<ShowTool />}></Route>
                <Route path="/tools/add" element={<AddTool />}></Route>
                <Route
                  path="/accessories"
                  element={<ShowAccessories />}
                ></Route>
                <Route
                  path="/accessories/add"
                  element={<AddAccessory />}
                ></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/search" element={<SearchPage />}></Route>
                <Route path="/profile" element={<ProfilePage />}></Route>
                <Route
                  path="/order-confirmation"
                  element={<PaymentSuccess />}
                ></Route>
              </Routes>
            </BrowserRouter>
          </OrderProvider>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
