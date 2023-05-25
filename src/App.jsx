import React from "react";

//import routes and route
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import components
import Header from "./components/Header";
import Footer from "./components/Footer";

//import pages
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
