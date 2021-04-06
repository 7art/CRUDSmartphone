import "./App.css";
import PhoneList from "./pages/PhoneList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <PhoneList />
      <Container fluid>
        <Row>
          <Col className="text-center pt-3 pb-3">© 2021</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
