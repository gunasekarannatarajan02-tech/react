import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./new/Home";
import Primitive from "./new/Primitive";
import NonPrimitive from "./new/NonPrimitive";

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
