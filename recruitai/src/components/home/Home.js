import { React, useState, useEffect } from "react";
import {
  Container,
  Image,
  Alert,
  Jumbotron,
  Accordion,
  Card,
  ListGroup,
} from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";

import Footer from "../navigation/Footer";
import NavBar from "../navigation/NavBar";

const MainBackground = null;

function Home() {
  const [width, setWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  let headerText;

  if (width < 500) {
    let hs = {
      color: "#fff",
    };

    headerText = (
      <center>
        {" "}
        <h4 style={{ ...hs, marginTop: "-25%" }}>Recruit AI</h4>
        <p style={{ ...hs, fontSize: "large" }}>Find better talent than JBO.</p>
      </center>
    );
  } else {
    let hs = {
      left: "40%",
      color: "#fff",
    };

    headerText = (
      <center>
        {" "}
        <h1 style={{ ...hs, fontSize: "xxx-large", marginTop: "-40%" }}>
          Recruit AI
        </h1>
        <h2 style={{ ...hs, marginBottom: "30%" }}>Find better talent.</h2>
      </center>
    );
  }

  return (
    <div>
      <center>
        <NavBar />
      </center>

      <Container>
        <div>
          {MainBackground && (
            <Image
              src={MainBackground}
              style={{ backgroundSize: "cover", width: "100%" }}
            />
          )}
          {headerText}
        </div>
        <br />
        <h3>What is Recruit AI</h3>
        <Jumbotron
          style={{ padding: "2rem 0.5rem", marginBottom: "1rem" }}
          fluid
        >
          <Container>
            <p style={{ fontWeight: "bold" }}>
              We are a team of dedicated sports experts looking to use machine
              learning to simplify the CBB recruiting process.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Pellentesque habitant morbi tristique senectus et. Rhoncus urna
              neque viverra justo nec ultrices dui sapien eget. Eget magna
              fermentum iaculis eu non. Lorem mollis aliquam ut porttitor leo a
              diam sollicitudin. Sed turpis tincidunt id aliquet risus feugiat.
              Volutpat ac tincidunt vitae semper quis lectus. Sed viverra ipsum
              nunc aliquet bibendum. Blandit volutpat maecenas volutpat blandit
              aliquam. Eget felis eget nunc lobortis mattis aliquam faucibus.
              Nunc sed blandit libero volutpat. Convallis tellus id interdum
              velit laoreet id donec ultrices tincidunt. Donec enim diam
              vulputate ut.
            </p>
          </Container>
        </Jumbotron>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Id neque
          aliquam vestibulum morbi blandit cursus risus at ultrices. Nisl purus
          in mollis nunc sed id. Laoreet id donec ultrices tincidunt arcu non
          sodales. Ipsum suspendisse ultrices gravida dictum fusce ut placerat.
          Condimentum id venenatis a condimentum vitae sapien pellentesque.
          Condimentum vitae sapien pellentesque habitant morbi tristique.
          Accumsan lacus vel facilisis volutpat est. Turpis egestas pretium
          aenean pharetra magna ac placerat vestibulum. At varius vel pharetra
          vel turpis. Sem nulla pharetra diam sit amet nisl suscipit adipiscing.
        </p>

        <Card>
          <Card.Header>Key Info</Card.Header>
          <Card.Body>
            <Card.Text>
              <a style={{ fontWeight: "bold" }}>Sign-up</a>: please give us
              money
            </Card.Text>
            <Card.Text>
              <a style={{ fontWeight: "bold" }}>Techinieuq</a>: test
            </Card.Text>
            <Card.Text>
              <a style={{ fontWeight: "bold" }}>TEst</a>: test
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Id neque
          aliquam vestibulum morbi blandit cursus risus at ultrices. Nisl purus
          in mollis nunc sed id. Laoreet id donec ultrices tincidunt arcu non
          sodales. Ipsum suspendisse ultrices gravida dictum fusce ut placerat.
        </p>
        <h3>FAQ</h3>
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              How do I sign up?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <a href="https://duke.qualtrics.com/jfe/form/SV_ePtZ85N4flD1Njw">
                  Sign up
                </a>{" "}
                Test
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              More information
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Id
                neque aliquam vestibulum morbi blandit cursus risus at ultrices.
                Nisl purus in mollis nunc sed id. Laoreet id donec ultrices
                tincidunt arcu non sodales. Ipsum suspendisse ultrices gravida
                dictum fusce ut placerat.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">
              More questions:
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>Contact us: gokesT @ github</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <br />
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
