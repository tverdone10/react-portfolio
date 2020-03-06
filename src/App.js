import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Anime from "react-anime";
import Main from "./components/Main/main";

import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";

function App() {
  return (
    <div className="background">
      <Layout>
        <Header
          className="header-color"
          title={
            <span>
              <span style={{ color: "#ddd" }}></span>
              <strong>
                <a href="/" style={{ textDecoration: "none", color: "white" }}>
                  Thomas Verdone
                </a>
              </strong>
            </span>
          }
        >
          <Navigation>

            <a href="/">
              <div className="grow">Home <i class="fas fa-home"></i></div>
            </a>
            <a href="/Projects">
              Projects <i class="fas fa-briefcase"></i>
            </a>
            {/* <a href="/Resume">
              Resume <i class="far fa-id-card"></i>
            </a> */}

          </Navigation>
        </Header>
        <Drawer title="Navigation">
          <Navigation>

            <a href="/">
              Home <i class="fas fa-home"></i>
            </a>
            <a href="/Projects">
              Projects <i class="fas fa-briefcase"></i>
            </a>
            {/* <a href="/Resume">
              Resume <i class="far fa-id-card"></i>
            </a> */}
          </Navigation>
        </Drawer>
        <Content>
          <Main/>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
