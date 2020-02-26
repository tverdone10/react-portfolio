import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText
} from "react-mdl";

import BobHead from "../../img/bobsbig2.png";
import FullBob from "../../img/bobsbig.png";
import Notes from "../../img/notetaker.png";
import Ruya from '../../img/ruya.png'

export default class Audiobooks extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          <p className="projects-description">Full Stack dev</p>
          <div className="projects-grid">

            {/* CARD 1 */}
            <Card
              className="card-one"
              shadow={5}
              style={{ minWidth: "450", margin: "auto" }}
            >
              <CardTitle
                style={{
                  color: "black",
                  textShadow: "1px 1px white",
                  height: "176px",
                  backgroundImage: `url(${BobHead})`,
                  backgroundPosition: "center",
                  backgroundRepeat: 'no-repeat'
                }}
              >
                Bob's Big Break
              </CardTitle>
              <CardText>
                Bob's Big Break is an incremental clicker game about making
                money and buying stuff. This project was built using a full MERN
                stack.
              </CardText>
              <CardActions border>
                <Button>Github</Button>
                <Button>Deployed</Button>
              </CardActions>
              <CardMenu style={{ color: "grey" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            <Card
              shadow={5}
              style={{ minWidth: "450", margin: "auto" }}
            >
              <CardTitle
                style={{
                  color: "black",
                  textShadow: "2px 1px grey",
                  height: "176px",
                  backgroundColor: '#E9E9E7',
                  backgroundImage: `url(${Ruya})`,
                  backgroundPosition: "center",
                  backgroundRepeat: 'no-repeat'
                }}
              >
                Ruya
              </CardTitle>
              <CardText>
                Ruya is a tool used to compare historical stock data. This tool can generate a graph to compare any two stocks over whatever period of time you wish from the year 2000 until today. (Access Code: 'spidre')
              </CardText>
              <CardActions border>
                <Button>Github</Button>
                <Button>Deployed</Button>
              </CardActions>
            </Card>

            <Card
              shadow={5}
              style={{ minWidth: "450", margin: "auto" }}
            >
              <CardTitle
                style={{
                  color: "black",
                  textShadow: "2px 1px white",
                  height: "176px",
                  backgroundImage: `url(${Notes})`,
                  backgroundPosition: "cover"
                }}
              >
                Express Note Taker
              </CardTitle>
              <CardText>This is a note taking app using an Express server.</CardText>
              <CardActions border>
                <Button>Github</Button>
                <Button>Deployed</Button>
              </CardActions>
            </Card>

            {/* <Card
              shadow={5}
              style={{ minWidth: "450", margin: "auto" }}
            >
              <CardTitle
                style={{
                  color: "black",
                  textShadow: "2px 1px white",
                  height: "176px",
                  backgroundImage: `url(${FullBob})`,
                  backgroundPosition: "center"
                }}
              >
                Express Note Taker
              </CardTitle>
              <CardText>
                Bob's Big Break is an incremental clicker game about making
                money and buying stuff. This project was built using a full MERN
                stack.
              </CardText>
              <CardActions border>
                <Button>Github</Button>
                <Button>Deployed</Button>
              </CardActions>
            </Card> */}
          </div>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <p className="projects-description">Independently produced hundreds of Audio Books for companies such as Tantor Audio, Recorded Books, Highbridge Audio, Bee Audio, and many more.</p>
           <div className="projects-grid">
            <Card
              className="card-one"
              shadow={5}
              style={{ minWidth: "450", margin: "auto" }}
            >
              <CardTitle
                style={{
                  color: "black",
                  textShadow: "1px 1px white",
                  height: "176px",
                  backgroundImage: `url(${BobHead})`,
                  backgroundPosition: "center",
                  backgroundRepeat: 'no-repeat'
                }}
              >
                Bob's Big Break
              </CardTitle>
              <CardText>
                Bob's Big Break is an incremental clicker game about making
                money and buying stuff. This project was built using a full MERN
                stack.
              </CardText>
              <CardActions border>
                <Button>Github</Button>
                <Button>Deployed</Button>
              </CardActions>
              <CardMenu style={{ color: "grey" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            <Card
              shadow={5}
              style={{ minWidth: "450", margin: "auto" }}
            >
              <CardTitle
                style={{
                  color: "black",
                  textShadow: "2px 1px grey",
                  height: "176px",
                  backgroundColor: '#E9E9E7',
                  backgroundImage: `url(${Ruya})`,
                  backgroundPosition: "center",
                  backgroundRepeat: 'no-repeat'
                }}
              >
                Ruya
              </CardTitle>
              <CardText>
                Ruya is a tool used to compare historical stock data. This tool can generate a graph to compare any two stocks over whatever period of time you wish from the year 2000 until today. (Access Code: 'spidre')
              </CardText>
              <CardActions border>
                <Button>Github</Button>
                <Button>Deployed</Button>
              </CardActions>
            </Card>

            <Card
              shadow={5}
              style={{ minWidth: "450", margin: "auto" }}
            >
              <CardTitle
                style={{
                  color: "black",
                  textShadow: "2px 1px white",
                  height: "176px",
                  backgroundImage: `url(${Notes})`,
                  backgroundPosition: "cover"
                }}
              >
                Express Note Taker
              </CardTitle>
              <CardText>This is a note taking app using an Express server.</CardText>
              <CardActions border>
                <Button>Github</Button>
                <Button>Deployed</Button>
              </CardActions>
            </Card>
            </div>
        </div>
      );
    } 
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab  style={{color:'white'}}>Web Development <i class="fas fa-globe"></i></Tab>
          <Tab  style={{color:'white'}}>Audio Books <i class="fab fa-audible"></i></Tab>

        </Tabs>

        <section>
          <div className="content">{this.toggleCategories()}</div>
        </section>
      </div>
    );
  }
}
