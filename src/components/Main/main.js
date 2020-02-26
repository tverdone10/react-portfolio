import React from 'react'
import Landing from '../LandingPage/landingpage'

import About from '../About/about'
import Resume from '../Resume/resume'
import Audiobooks from '../Projects/audiobooks'
import Websites from "../Projects/websites"
import {Switch, Route} from 'react-router-dom'


const  Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/Resume" component={Resume} />
        <Route exact path="/Projects" component={Audiobooks} />
        <Route exact path="/Websites" component={Websites} />
    </Switch>
)

export default Main