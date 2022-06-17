import { Landing, Register, Dashboard, Error } from "./pages";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
