import React, { Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import './modal.css'

class ModalWindow extends Component {
  modalHeader() {}

  modalBody() {}

  modalFooter() {}

  render() { 
    return (
      <>
        <Modal className="modal-container" show={this.props.show} onHide={this.props.handleClose} aria-labelledby="contained-modal-title-vcenter"
        centered>
          {this.modalHeader()}
          {this.modalBody()}
          {this.modalFooter()}
        </Modal>
      </>
    )
  }
}

export default ModalWindow;
