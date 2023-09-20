import React, { Component } from "react";

export class Hello extends React.Component {
  render() {
    const { greetings: shown } = this.props;
    return <h4>{shown}</h4>;
  }
}
