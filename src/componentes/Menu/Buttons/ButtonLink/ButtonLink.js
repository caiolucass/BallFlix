import React, { Component } from "react";

export default class ButtonLink extends Component {
  /*Props
   *props =>{className="", href=""}
   */
  render() {
    return (
      <a className={this.props.className} href={this.props.href}>
        {this.props.children}
      </a>
    );
  }
}
