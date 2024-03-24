import { Route, Routes } from "react-router-dom";
import "./App.css";
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
      <Navbar />
      <Routes>
        {routes.map((route, index) => (
          <Route path={route.path} element={route.element} key={index} />
        ))}
      </Routes>
    </>
  );
}

export default App;
