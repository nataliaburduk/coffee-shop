import ModalWindow from "../../shared/modal/modal";
import Form from "react-bootstrap/Form";

class MainModal extends ModalWindow {
  modalHeaderTitle() {
    return "Please, enter your name and email to get the detailed info";
  }

  modalFooterBtn() {
    return "Send";
  }

  modalBody() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            className="form-placeholder"
            type="name"
            placeholder="Enter your name"
          />
          <Form.Control
            className="form-placeholder"
            type="email"
            placeholder="Enter your email"
          />
        </Form.Group>
      </Form>
    );
  }
}

export default MainModal;
