import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Blogs from "./components/Blogs/Blogs";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AddInventory from "./components/AddInventory/AddInventory";
import ManageInventory from "./components/ManageInventory/ManageInventory";
import InventoryDetails from "./components/InventoryDetails/InventoryDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route
          path="/inventory/:itemId"
          element={<InventoryDetails></InventoryDetails>}
        ></Route>
        <Route path="/addinventory" element={<AddInventory />}></Route>
        <Route path="/manageinventory" element={<ManageInventory />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
