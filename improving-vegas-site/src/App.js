import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Grid, Row, Col, PageHeader } from 'react-bootstrap';

import Main from './Pages/Main.jsx';
import Aside from './Pages/Aside.jsx';

import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTitle: "Improving Vegas Room Party!"
    }
  }

  SetPageTitle(newPageTitle) {
    this.setState(
      {pageTitle: newPageTitle}
    )
  }

  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
        
        <div className="fullscreen-bg">
          <video loop autoPlay poster={require('./images/PartyRoomBG.png')} className="fullscreen-bg__video">
            <source type="video/webm" src="https://storagejemsystems.blob.core.windows.net/asset-48d78694-7454-4f22-90d4-f2fc38282fd8/PartyRoom_notext_withoutaudio.webm?sv=2015-07-08&sr=c&si=c6cd22d5-5847-456d-97b4-d1dc8390c0d3&sig=Y5%2BA7DQKFHSPBF68GQiWK56xPbv8%2BwUBa3mvAmJDPzg%3D&st=2018-08-31T20%3A39%3A46Z&se=2118-08-31T20%3A39%3A46Z" />
            <source type="video/mp4" src="https://storagejemsystems.blob.core.windows.net/asset-37dfd35e-11ea-4a6d-9002-2d708245b1e8/PartyRoom_notext_withoutaudio.mp4?sv=2015-07-08&sr=c&si=1c174df9-9ab4-4740-aa6a-b0cfe5c52691&sig=Q5lQl5ipZAB%2BKct2mnXdZtjcPGJHklaLNMB5RVrKTuc%3D&st=2018-08-31T20%3A41%3A18Z&se=2118-08-31T20%3A41%3A18Z" />
          </video>
        </div>

        <Grid fluid>
          <PageHeader>
            {this.state.pageTitle}&nbsp;&nbsp;
            <small>Let's get this started!</small>
          </PageHeader>
          <Row>
            <Col sm={8}>
              <Switch>
                <Route exact={true}
                  path="/"
                  render={(props) => <Main {...props} />}
                />
              </Switch>
            </Col>
            <Col sm={4}>
              <Aside />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
