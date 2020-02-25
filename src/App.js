import React from 'react';
import logo from './logo.svg';
import './App.css';

import Main from './components/Main/main'



import {Layout,
        Header,
        Navigation,
        Drawer, 
        Content} from 'react-mdl'

function App() {
  return (
<div className="background">
    <Layout>
        <Header className="header-color" 
        title={<span><span style={{ color: '#ddd' }}></span>
        <strong><a href="/" 
                  style={{decoration: "none"}}>
                    Thomas Verdone</a></strong>
                    </span>}>
            <Navigation>
                <a href="/Resume">Resume</a>
                <a href="/Websites">Websites</a>
                <a href="/Audio-Books">Audio Books</a>
                <a href="/Contact">Contact</a>
            </Navigation>
        </Header>
        <Drawer title="Navigation">
            <Navigation>
                <a href="/">Home <i class="fas fa-home"></i></a>
                <a href="/Resume">Resume <i class="fas fa-book-open"></i></a>
                <a href="/Websites">Websites <i class="fas fa-globe"></i></a>
                <a href="/Audio-Books">Audio Books <i class="fab fa-audible"></i></a>
                <a href="/Contact">Contact <i class="far fa-id-card"></i></a>
            </Navigation>
        </Drawer>
        <Content>
          <Main />
          </Content>
    </Layout>
</div>
  );
}

export default App;
