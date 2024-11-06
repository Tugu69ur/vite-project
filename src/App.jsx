import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar"

const App = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default App