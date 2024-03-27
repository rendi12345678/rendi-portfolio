import { useEffect } from "react";
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
  const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((reveal) => {
      const windowHeight = window.innerHeight;
      const revealTop = reveal.getBoundingClientRect().top;
      const revealPoint = 150;

      if (revealTop > windowHeight - revealPoint)
        return reveal.classList.remove("show-animation");

      return reveal.classList.add("show-animation");
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", reveal);
    reveal();

    return () => window.removeEventListener("scroll", reveal);
  }, []);

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
