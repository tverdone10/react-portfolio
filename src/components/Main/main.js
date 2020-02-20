import React from 'react'
import Landing from '../LandingPage/landingpage'
import Resume from '../Resume/resume'
import About from '../About/about'
import Contact from '../Contact/contact'
import Audiobooks from '../Projects/audiobooks'
import Websites from "../Projects/websites"
import {Switch, Route} from 'react-router-dom'


const  Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Resume" component={Resume} />
        <Route exact path="/Audio-Books" component={Audiobooks} />
        <Route exact path="/Websites" component={Websites} />
    </Switch>
)

export default Main