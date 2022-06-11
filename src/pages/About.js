import React, { Component } from 'react';
import JerryProfilePic from "../assests/JerryProfilePic.jpg";
import "./About.css";
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
    <div class="split left">
      <div className="centered">
        <img 
          className="profile_image"
          src = {JerryProfilePic}
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Jerry</div>
        <div className="brief_description">
          <p>Hello my name is Jerry Odigie I am Junior / Rising Senior Currently Attending Queens College and Happy to be here and learning with you all.</p>
        </div>
      </div>
    </div>
  </div> 
      </div>
    )
  }
}