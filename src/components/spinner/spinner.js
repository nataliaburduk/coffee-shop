import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
  <div className="spinner-container">
          <Spinner animation="grow" size="xsm" className="spinner"/>
          <Spinner animation="grow" size="xsm" className="spinner"/>
          <Spinner animation="grow" size="xsm" className="spinner"/>
        </div>
  )
}
export default Loading;