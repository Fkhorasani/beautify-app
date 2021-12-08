import React, { Component, useState } from "react";
import "styles/About.scss";

const teamMember = [
  {
    name: "Adrian Finantyo",
    nim: "00000042580",
    img: "https://adrianfinantyo.github.io/img/Its%20me.png",
  },
  {
    name: "Fernando Khorasani",
    nim: "000000XXXXX",
    img: "https://adrianfinantyo.github.io/img/Its%20me.png",
  },
  {
    name: "Lifosmin Simon",
    nim: "000000XXXXX",
    img: "https://adrianfinantyo.github.io/img/Its%20me.png",
  },
];

const Card = (props) => {
  return (
    <div className="card" onClick={() => props.setSide(props)}>
      <div className="card__wrapper">
        <img src={props.img} alt={`${props.img} profile`} />
      </div>
      <div className="desc">
        <p className="desc__title">Name</p>
        <p>{props.name}</p>
      </div>
    </div>
  );
};

const About = () => {
  const [side, setSide] = useState(null);

  const freezeBody = (state) => {
    const body = document.querySelector("body");
    state ? body.classList.add("locked") : body.classList.remove("locked");
  };
  side !== null ? freezeBody(true) : freezeBody(false);
  return (
    <section className="section-separators">
      <div
        className={`desc-sidebar-wrapper ${side !== null ? "blurred" : ""}`}
        onClick={() => setSide(null)}
      >
        <aside className={`desc-sidebar ${side !== null ? "show" : ""}`}>
          <h1>test</h1>
        </aside>
      </div>
      <h1>About Us</h1>
      <div className="card-container">
        {teamMember.map((data, index) => (
          <Card
            setSide={setSide}
            name={data.name}
            nim={data.nim}
            img={data.img}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
