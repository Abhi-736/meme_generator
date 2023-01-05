import React from 'react';
import './index.css';
import Meme from "./components/Meme";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {

  return (<div>
    <Header />
    <Meme />
    <Footer />
  </div>)
}
