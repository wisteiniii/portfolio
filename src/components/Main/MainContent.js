import React from "react";
import Greeting from "./Greeting";
import Knowlege from "./Knowledge";
import { Container } from "@material-ui/core";

function MainContent() {
  return (
    <main>
      <Container>
        <Greeting />
        <Knowlege />
      </Container>
    </main>
  );
}

export default MainContent;
