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
