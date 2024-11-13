import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import { CartProvider } from "./pages/home/CartContext"; 

const App = () => {
  return (
    <CartProvider>
      <Navbar />
      <Outlet />
    </CartProvider>
  );
};

export default App;
