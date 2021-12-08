import React, { Component } from "react";

export default class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section className="section-separators">
        <h1>Ini Halaman About Us</h1>
      </section>
    );
  }
}
