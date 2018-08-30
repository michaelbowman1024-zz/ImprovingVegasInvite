import React, { Component } from 'react';

import { Row, Table, Carousel } from 'react-bootstrap';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: []
        }
    }

    componentDidMount() {
        this.SetNames();
    }

    SetNames() {
        this.setState({
            names: ['Christopher Sauer', 'Michael Bowman']
        });
    }

    render() {
        return(
            <div>
                <h1>Welcome to Vegas!</h1>
                <span>Woooohooooo - join an Improvers Room Party =D</span>
            </div>
        )
    }
}

export default Main;