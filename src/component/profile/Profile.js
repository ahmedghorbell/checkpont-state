import React, { Component } from "react";
import "./Profile.css";
import {
  UilGithub,
  UilInstagram,
  UilLinkedin,
  UilFacebook,
} from "@iconscout/react-unicons";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Ahmed Ghorbel",
        Bio: "Completing a full-stack JavaScript training program at GOMYCODE while pursuing a master's degree in accounting at the business school",
        Profession: "Student",
        imgSrc:
          "https://scontent.ftun10-1.fna.fbcdn.net/v/t1.15752-9/321567479_1322026688364761_5062812653435221383_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=-yJctFOn9oIAX-2yoA1&_nc_ht=scontent.ftun10-1.fna&oh=03_AdRgEJHxkX07Xqsae6dOFnADCGK_myQfozgDFnRtp4Ii2A&oe=641DB936",
      },
    };
  }

  render() {
    return (
      <div>
        <div class="image-area">
          <div class="img-wrapper">
            <img src={this.state.person.imgSrc} alt="Atul Prajapati" />
            <h2>{this.state.person.fullName}</h2>
            <ul>
              <li>
                <a href="https://github.com/ahmedghorbell">
                  <UilGithub />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/ahmedghorbell/?hl=fr">
                  <UilInstagram />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/ahmed-ghorbel-84ba34200/">
                  <UilLinkedin />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/Ahmedghorbell">
                  <UilFacebook />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="stud">
          <div className="text">
            <span>S</span>
            <span>T</span>
            <span>U</span>
            <span>D</span>
            <span>E</span>
            <span>N</span>
            <span>E</span>
            <span>T</span>
          </div>
          <div className="prof">
          <p className="fancy">{this.state.person.Bio}</p>
          </div>
        </div>
      </div>
    );
  }
}
