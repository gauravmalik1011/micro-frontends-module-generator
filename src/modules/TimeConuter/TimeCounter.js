import React from "react";
import { connect } from "react-redux";
import ExecutionEnvironment from "exenv";

import clientHydration from "../../clientHydration";

const TimeCounter = ({ time }) => {
  return (
    <div>
      <h4>Current Time:</h4>
      <p className="display-3 text-center count">
        ${time}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  if (state.rootState) {
    return { time: state.rootState.time };
  }
  return {};
};

const connectedTimeCounter = connect(mapStateToProps)(TimeCounter);

export default connectedTimeCounter;

if (ExecutionEnvironment.canUseDOM) {
  clientHydration({
    moduleName: "TimeCounter",
    component: connectedTimeCounter
  });
}
