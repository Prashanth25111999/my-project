import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";

import About from "./pages/About";
import Services from "./pages/Services";
import MailingList from "./pages/MailingList";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Header from "./components/Header";
import ScrollToTopButton from "./utils/ScrollToTopButton";
import ErrorRoute from "./pages/ErrorRoute";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/mailinglist" element={<MailingList />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorRoute />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
};

export default App;
