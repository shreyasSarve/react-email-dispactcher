import { Col, Row } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import About from "./components/About";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Row>
        <Col sm="5">
          <About />
        </Col>
        <Col col="5">
          <Form />
        </Col>
      </Row>
    </div>
  );
}

export default App;
