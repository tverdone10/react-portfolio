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
                <Cell col={6}>
      <h2>Thomas Verdone</h2>

      <img className="profile-img"
        src= {Profile}
        style={{height: '250px'}}
        />
        <hr></hr>
        <p
        style={{width: '75%',
                margin: 'auto',
                paddingTop: '1em',
                 }}
        >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </Cell>
                <Cell col={6}>
                    <h2>Skills</h2>
                    <hr></hr>
                    <div className="skills-parent">
                    <div className='skills-container'>
                    <h4>React</h4>
                    <h4>React</h4>
                    <h4>React</h4>
                    <h4>React</h4>
                    </div>
                    <div className='skills-container'>
                    <h4>React</h4>
                    <h4>React</h4>
                    <h4>React</h4>
                    <h4>React</h4>
                    </div>
                    <div className='skills-container'>
                    <h4>React</h4>
                    <h4>React</h4>
                    <h4>React</h4>
                    <h4>React</h4>
                    </div>
                    </div>
                </Cell>
            </Grid>
        </div>
    )
}