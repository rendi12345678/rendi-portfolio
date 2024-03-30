import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppProvider from "./components/context/AppProvider";
import NavbarProvider from "./components/context/NavbarProvider";
import Navbar from "./components/main/Navbar";
import useRevealAnimations from "./hooks/useRevealAnimations";
import Home from "./pages/Home";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
];

function App() {
  useRevealAnimations();

  return (
    <AppProvider>
      <NavbarProvider>
        <Navbar />
        <Routes>
          {routes.map((route, index) => (
            <Route path={route.path} element={route.element} key={index} />
          ))}
        </Routes>
      </NavbarProvider>
    </AppProvider>
  );
}

export default App;
