import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item container">
      <input type="checkbox" checked={props.item.completed} />
      <span>
        <p>{props.item.text}</p>
        <p>Lorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsum</p>
      </span>
    </div>
  );
}

export default TodoItem;
