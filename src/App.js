import React from "react";
import NavbarMenu from "./components/NavbarMenu";
import FormSection from "./components/FormSection";
import AccordionSection from "./components/AccordionSection";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div style={{ backgroundColor: "#f0f4f8", minHeight: "100vh" }}>
      <NavbarMenu />
      <FormSection />
      <AccordionSection />
      <Footer />
    </div>
  );
}

export default App;
