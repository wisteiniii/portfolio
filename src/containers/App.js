import React, { Component } from "react";
import Header from "../components/Header/Header";
import MainContent from "../components/Body/MainContent";
import Footer from "../components/Footer/Footer";
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
