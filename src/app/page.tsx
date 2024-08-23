import Navbar from "../components/Navbar";
import Home from "../components/Home/index";
import Footer from "../components/Footer/index"
import * as React from "react";
import {NextUIProvider} from "@nextui-org/system";
// import Contact from "../components/Contact";
import About from "../components/About";
import Review from "../components/Review";
import Product from "../components/Product";

export default function App() {
  return (
    <NextUIProvider>
     <Navbar/>
     <Home/>
     <About/>
     <Product/>
     <Review/>
     {/* <Contact/>*/}
     <Footer/> 
    </NextUIProvider>
  );
}
