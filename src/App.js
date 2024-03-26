import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarProvider from "./components/context/NavbarProvider";
import Navbar from "./components/main/Navbar";
import Home from "./pages/Home";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
];

function App() {
  return (
    <>
      <NavbarProvider>
        <Navbar />
        <Routes>
          {routes.map((route, index) => (
            <Route path={route.path} element={route.element} key={index} />
          ))}
        </Routes>
      </NavbarProvider>
    </>
  );
}

export default App;
