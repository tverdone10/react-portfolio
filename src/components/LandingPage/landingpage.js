import React from 'react'
import {Grid, 
        Cell} from 'react-mdl'
import Profile from '../../img/profile.jpg'



export default function Landing() {
    return (
<div style={{width: '100%', margin: '0 auto'}}>
    <Grid className="landing-grid">
        <Cell col={12}>

        <img className="profile-img"
        src= {Profile}
        />

        <div className="banner-text">

            <h1>Full Stack Web Developer</h1>
            <hr />
            <p className="skills">React | React Native | Javascript | MongoDB | HTML/CSS | Node.js</p>
            <div className="social-links">
            <a href='github.com' target="_blank">
            <i className="fab fa-github"/>
            </a>
            <a>
            <i class="fab fa-linkedin"></i>
            </a>
            </div>

        </div>

        </Cell>
    </Grid>
    </div>
    )
}