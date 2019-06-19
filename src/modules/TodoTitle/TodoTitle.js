import React from "react";
import { connect } from "react-redux";
import ExecutionEnvironment from "exenv";

import clientHydration from "../../clientHydration";

const TodoTitle = ({ name }) => {
  return (
    <div>
      <h1>{name} Todo's</h1>
    </div>
  );
};

const mapStateToProps = state => {
  if (state.rootState.TodoList) {
    return { name: state.rootState.TodoList.user.name };
  }
  return {};
};

const connectedTodoTitle = connect(mapStateToProps)(TodoTitle);

export default connectedTodoTitle;

if (ExecutionEnvironment.canUseDOM) {
  clientHydration({
    moduleName: "TodoTitle",
    component: connectedTodoTitle
  });
}
