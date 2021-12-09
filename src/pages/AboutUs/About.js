import React, { useEffect, useState } from "react";
import { ReactComponent as Spinner } from "images/loader.svg";
import "styles/About.scss";
import profileAdrian from "images/adrian_profile.png";
import profileFernando from "images/fernando_profile.jpg";
import profileLifosmin from "images/lifosmin_profile.jpg";

const teamMember = [
  {
    name: "Adrian Finantyo",
    nim: "00000042580",
    img: profileAdrian,
    summary:
      "Hello! My name is Bonifasius Ariesto Adrian Finantyo, student of Universitas Multimedia Nusantara, Indonesia. An enthusiastic software engineer learns a new skill every day. Student, freelance web developer, and React JS enthusiast. Currently working on several web development projects. Active on organization and likes a challenge. Interested and still learning about web app development. Looking to leverage my knowledge and experience by becoming a laboratory assistant.",
  },
  {
    name: "Fernando Khorasani",
    nim: "00000043088",
    img: profileFernando,
    summary:
      "Hello! My name is Fernando Khorasani, student of Universitas Multimedia Nusantara, Indonesia. An enthusiastic software engineer learns a new skill every day. Student, freelance web developer, and React JS enthusiast. Currently working on several web development projects. Active on organization and likes a challenge. Interested and still learning about web app development. Looking to leverage my knowledge and experience by becoming a laboratory assistant.",
  },
  {
    name: "Lifosmin Simon",
    nim: "00000045574",
    img: profileLifosmin,
    summary:
      "Hello! My name is Lifosmin Simon, student of Universitas Multimedia Nusantara, Indonesia. An enthusiastic software engineer learns a new skill every day. Student, freelance web developer, and React JS enthusiast. Currently working on several web development projects. Active on organization and likes a challenge. Interested and still learning about web app development. Looking to leverage my knowledge and experience by becoming a laboratory assistant.",
  },
];

const Card = (props) => {
  return (
    <div className="card" onClick={() => props.setSide(props)}>
      <div className="card__wrapper">
        <img src={props.img} alt={`${props.img} profile`} loading="lazy" />
      </div>
      <div className="desc">
        {/* <p className="desc__title">Name</p> */}
        <p>{props.name}</p>
        <p>{props.nim}</p>
      </div>
    </div>
  );
};

const About = () => {
  const [side, setSide] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (side !== null) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } else {
      setTimeout(() => {
        setLoading(true);
      }, 500);
    }
  }, [side]);

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
          <div>
            {loading ? (
              <div className="desc-sidebar__spinner">
                <Spinner />
              </div>
            ) : (
              <div className="desc-sidebar__container">
                <div className="desc-sidebar__wrapper">
                  <img
                    src={side ? side.img : ""}
                    alt={side ? side.name + " profiles" : ""}
                  />
                </div>
                <div className="desc-sidebar__more">
                  <h3 className="title">Summary</h3>
                  <p className="summary"> {side ? side.summary : ""}</p>
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
      <h1>About Us</h1>
      <div className="card-container">
        {teamMember.map((data, index) => (
          <Card
            setSide={setSide}
            name={data.name}
            summary={data.summary}
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
