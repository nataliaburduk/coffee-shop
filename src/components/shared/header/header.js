import ErrorBoundary from "../../errorBoundary/errorBoundary";
import Container from "react-bootstrap/Container";
import "./header.scss";

const Header = (props) => {

  const { title } = props;

  return (
    <ErrorBoundary>
      <Container fluid className="header">
        <div className="header-title">{title}</div>
      </Container>
    </ErrorBoundary>
  )
}

export default Header;
