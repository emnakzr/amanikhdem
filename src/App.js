import React from "react";
import Profile from "./Profile/Profile";
import jett from "./images/jett.png";
import "./styles.css";

export default function App() {
  function handleName(name) {
    alert(`Hello my name is ${name}`);
  }

  return (
    <div className="App">
      <Profile
        fullName="emmmmmmna"
        bio="Hello"
        profession="shay"
        handleName={handleName}
      >
        <img
          style={{ borderRadius: "100%", width: "200px", height: "200px" }}
          src={jett}
          alt="avatar"
        />
      </Profile>
      <Profile
        fullName="Jane Doe"
        bio="Hello , my name is emna"
        profession="battala"
        handleName={handleName}
      >
        <img
          style={{ borderRadius: "100%", width: "200px", height: "200px" }}
          src={jett}
          alt="avatar"
        />
      </Profile>
    </div>
  );
}
