import React from "react";
import Greeting from "./Greeting";
import TodoItemList from "./TodoItemList";

function MainContent() {
  return (
    <main>
      <Greeting />
      <TodoItemList />
    </main>
  );
}

export default MainContent;
