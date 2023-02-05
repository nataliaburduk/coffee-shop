import React, { Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './modal.scss'

class ModalWindow extends Component {
  modalHeaderTitle() {}
  modalBody() {}
  modalFooterBtn() {}

  render() { 
    return (
      <>
        <Modal className="modal-container" show={this.props.show} onHide={this.props.handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header className='modal-header' closeButton>
            <Modal.Title className='modal-title'>{this.modalHeaderTitle()}</Modal.Title>
          </Modal.Header>
          <Modal.Body className='modal-body'>{this.modalBody()}</Modal.Body>
          <Modal.Footer className='modal-footer'>
            <Button className='submit-btn'>{this.modalFooterBtn()}</Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default ModalWindow;
