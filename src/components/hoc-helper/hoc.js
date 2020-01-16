import React, { Component } from "react";
import Spinner from "../spinner/spinner";

export const hoc = (Comp, getData) => {
  return class extends Component {
    state = {
      data: null
    };

    componentDidMount() {
      getData().then(data => this.setState({ data }));
    }

    render() {
      const { data } = this.state;
      if (!data) return <Spinner />;
      return <Comp {...this.props} data={data} />;
    }
  };
};
