import React from "react";
import Greeting from "./Greeting";
import Hero from "./Hero";
import Knowlege from "./Knowledge";
import { Container } from "@material-ui/core";

function MainContent() {
  return (
    <main>
      <Hero />
      <Container>
        <Knowlege />
      </Container>
    </main>
  );
}

export default MainContent;
