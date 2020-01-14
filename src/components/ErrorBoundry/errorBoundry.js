import { Component } from "react";

export default class ErrorBoundry extends Component {
  state = {
    hasError: false
  };
  componentDidCatch() {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) return; //To-do add error indicator
    return this.props.children;
  }
}
