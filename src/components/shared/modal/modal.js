import React, { Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './modal.css'

class ModalWindow extends Component {
  render() { 
    return (
      <>
        <Modal className="modal-container" show={this.props.show} onHide={this.props.handleClose} aria-labelledby="contained-modal-title-vcenter"
        centered>
          <Modal.Header className='modal-header' closeButton>
            <Modal.Title className='modal-title'>Please, enter your name and email to get the detailed info</Modal.Title>
          </Modal.Header>
          <Modal.Body className='modal-body'>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control className='form-placeholder'
                  type="name"
                  placeholder="Enter your name"/>
                <Form.Control className='form-placeholder'
                  type="email"
                  placeholder="Enter your email"/>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer className='modal-footer'>
            <Button className='submit-btn'>Send</Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default ModalWindow;
