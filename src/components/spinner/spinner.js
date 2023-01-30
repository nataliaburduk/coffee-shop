import { Component } from "react";
import { Spinner } from "react-bootstrap";

class Loading extends Component {
  render() {
    return (
    <div className="spinner-container">
            <Spinner animation="grow" size="xsm" className="spinner"/>
            <Spinner animation="grow" size="xsm" className="spinner"/>
            <Spinner animation="grow" size="xsm" className="spinner"/>
          </div>
    )
  }
}
export default Loading;