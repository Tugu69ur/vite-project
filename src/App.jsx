import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import { CartProvider } from "./pages/home/CartContext"; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <CartProvider>
      <Navbar />
      <div className="pt-20">
        <Outlet />
      </div>
      <ToastContainer position="bottom-right" />
    </CartProvider>
  );
};

export default App;
