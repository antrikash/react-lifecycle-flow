import React from "react";

class TestAllLifeCycleMethods extends React.Component {
  //Constructor function s the first one which triggers
  constructor(props) {
    super(props);
    this.state = {
      currentValue: 1
    };
  }
  // getDerivedStateFromProps is a static method and triggers before each render method.
  // it is used only to compare props with local state of component
  static getDerivedStateFromProps(props, state) {
    console.log("Hook", props, state);
    if (props.count > state.currentValue) {
      return {
        currentValue: props.count * 2
      };
    }
    return 0;
  }
  // As soon as render method fires in mounting phase,
  // the next method is CDM which is generally used to make API calls
  componentDidMount() {
    window.addEventListener("resize", this.resizeListener);
    console.log(
      "resize",
      window.addEventListener("resize", this.resizeListener)
    );
    this.setState({
      currentValue: 99
    });
  }

  // once the application enters in Updating phase After static GDSFP
  // SCU method fires to check if component needs to get render or not
  shouldComponentUpdate(nextProps, nextState) {
    console.log("SCU", nextProps, "SCU2", nextState);
    if (nextProps.count < nextState.currentValue) {
      return true;
    }
    return false;
  }

  //in updating phase after render, GSBU method is trigerred to check if prevProps and PrevState is same or not
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("SNAPSHOT", prevProps, prevState, window.innerWidth);
    if (prevProps.count !== prevState.currentValue) {
      return window.innerWidth;
    }
    return null;
  }

  //to update CDU is used, use setState with caution or it will cause infinite loop
  componentDidUpdate(nextProps, nextState, snapshot) {
    console.log(nextProps, "CDUUUU", nextState, "Snap", snapshot);
    if (snapshot !== null) {
    }
  }

  // it is used to remove all the resources and free the memory
  componentWillUnmount() {
    console.log("UNMOUNTED");
    debugger;
  }
  render() {
    console.warn("render" + this.props.count);
    return (
      <div>
        State currentValue: {this.state.currentValue} - PropsCount:{" "}
        {this.props.count}
      </div>
    );
  }
}

export default TestAllLifeCycleMethods;
