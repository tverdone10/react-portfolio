import React from 'react'
import {
    Tabs,
    Tab,
    Grid,
    Cell,
    List,
    ListItem,
    ListItemContent
  } from "react-mdl";

  import Profile from '../../img/profile.jpg'

export default function Resume() {
    return (
        <div className="contact-body">
            <Grid className="contact-grid">
                {/* <Cell col={6}>
      <div className='resume-about'>              
      <h2>Thomas Verdone</h2>

      <img className="profile-img"
        src= {Profile}
        style={{height: '250px'}}
        />
        <hr></hr>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
               </div>
                </Cell> */}
                <Cell col={12}>
                    <h2>Skills</h2>
                    <hr></hr>

                    <p>
                       I am a Web Developer with a diverse set of skills. I've completed the Full Stack Web Development Coding Bootcamp at UCLA Extension, and I've also done tons of self-teaching. More than anything I'm a problem finder, and a problem solver. I have years of experience working in publishing and Audio Books as well, managing work flows with narrators and publishers, and producing finished products out of nothing. 
                   </p>

                </Cell>
            </Grid>
        </div>
    )
}