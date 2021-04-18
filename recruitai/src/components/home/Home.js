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
import MainBackground from "./img/main-background.jpg";
import Logo from "../navigation/Logo";

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
      <center style={{ marginTop: "-40%" }}>
        {" "}
        <h1
          style={{
            ...hs,
            fontSize: "xxx-large",
            fontWeight: "bold",
          }}
        >
          Recruit AI
        </h1>
        <h2 style={{ ...hs, marginBottom: "30%" }}>
          Find better talent<a style={{ color: "#EF7F4D" }}>.</a>
        </h2>
        <hr />
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
              style={{
                backgroundSize: "cover",
                width: "100%",
              }}
            />
          )}
          {headerText}
        </div>
        <h2>
          We are the <a style={{ color: "#EF7F4D" }}>first ever</a> College
          Basketball AIaaS.
        </h2>
        <Jumbotron
          style={{
            padding: "2rem 0.5rem",
            margin: "1rem 1.2rem",
            backgroundColor: "#FEFEFE",
            border: "2px solid #e3e3e3",
          }}
          fluid
        >
          <Container>
            <p style={{ fontWeight: "bold" }}>
              We are a team of dedicated sports experts looking to use machine
              learning to simplify the CBB recruiting process.
            </p>
            <p>
              After observing Iowa's horrendus 2nd round exit against Oregon,
              our team of passionate sports experts decided on one goal: 
              To make sure college basketball recruiting is 
              fair and accurate to all schools. 
              We as a group disagree on the current state of basketball recruiting which is why
              we have created Recruit AI. We specifically target high school 
              athletes who are eager to advance to the next level of their career
            </p>
          </Container>
        </Jumbotron>
        <p>
          We use Machine Learning techniques to analyze decades worth of college basketball data. 
          Using the data, we are able to identify the best fit schools 
          for each individual high school athlete.
          Below are some examples of Recruit AI could do for you!
        </p>

        <Card>
          <Card.Header>How to Connect</Card.Header>
          <Card.Body>
            <Card.Text>
              <a style={{ fontWeight: "bold" }}>Sign-up</a>: Follow the sign-up link down below to get started!
            </Card.Text>
            <Card.Text>
              <a style={{ fontWeight: "bold" }}>T</a>: Payment: We will contact you with payment options after completion of signing up
            </Card.Text>
            <Card.Text>
              <a style={{ fontWeight: "bold" }}>T</a>: test
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <p>
          Some benefits of using Recruit AI:
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
                Use this button to sign up for Recruit AI
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Who can use Recruit AI?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                Whether you are a college recruiter, a high school athlete, or just passionate about college basketball,
                 Recruit AI caters to all lovers of the game.
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