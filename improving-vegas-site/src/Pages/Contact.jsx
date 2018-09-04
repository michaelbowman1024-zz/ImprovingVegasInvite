import React, { Component } from 'react';

import { Button, Modal, Popover } from 'react-bootstrap';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
          <div className="modal-container" style={{ height: 200 }}>
            <Button
              bsStyle="primary"
              bsSize="large"
              onClick={() => this.setState({ show: true })}
            >
              Launch contained modal
            </Button>
    
            <Modal
              show={this.state.show}
              onHide={this.handleHide}
              container={this}
              aria-labelledby="contained-modal-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title">
                  Contained Modal
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id
                ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleHide}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
        );
    }
}

export default Contact;