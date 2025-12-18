import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Primitive from "./pages/Primitive";
import NonPrimitive from "./pages/NonPrimitive";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/primitive" element={<Primitive />} />
        <Route path="/non-primitive" element={<NonPrimitive />} />
      </Routes>
    </>
  );
}

export default App;
