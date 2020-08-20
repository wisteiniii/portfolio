import React, { Component } from "react";
import Header from "./components/header/Header";
import MainContent from "./components/body/MainContent";
import Footer from "./components/footer/Footer";
import "./App.css";

class App extends Component {
  render () {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
  }
}

export default App;
