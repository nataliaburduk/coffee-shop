import { useState } from "react";
import Container from "react-bootstrap/Container";
import MainModal from "../main-modal/main-modal";

import beans from "../../../assets/img/beans-title.svg";
import "./main-screen.scss";

const MainScreen = () => {

  const [show, setShow] = useState(false);

  const showModal = (e) => {
    setShow(true)
  };

  const hideModal = (e) => {
    setShow(false)
  }
    return (
      <Container fluid className="main-screen">
        <div className="main-title">
          <p>Everything You Love About Coffee</p>
          <img src={beans} alt="coffee-title" />
          <p className="main-subtitle">
            We makes every day full of energy and taste
          </p>
          <p className="main-subtitle">Want to try our beans?</p>
          <button className="main-btn" onClick={() => showModal()}>
            More
          </button>
          <MainModal show={show} handleClose={() => hideModal()} />
        </div>
      </Container>
    )
}

export default MainScreen;
