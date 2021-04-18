import { React, useState, useEffect } from "react";
import {
  Container,
  Image,
  Alert,
  Jumbotron,
  Accordion,
  Card,
  ListGroup,
  Form,
  Button,
  Spinner,
  Row,
  Col,
} from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";

import Footer from "../navigation/Footer";
import NavBar from "../navigation/NavBar";
import Logo from "../navigation/Logo";
import MainBackground from "./img/main-background.jpg";
import Graph from "./img/assists.png";

function Recruiters() {
  const [width, setWidth] = useState(window.innerWidth);
  const [name, setName] = useState("");
  const [people, setPeople] = useState([]);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  const updateName = (val) => {
    setName(val);
  };

  const getPlayerComparision = async () => {
    //let temp = await getComparison(name);
    //console.log(temp);
    // Sadly this is broken
    let temp = [];
    temp.push({
      name: "Jaz Johnson",
      pos: "G",
      ppg: 28.9,
      mpg: 25.1,
      rpg: 3.2,
      apg: 5.1,
      fpg: 2.2,
      bpg: 2.6,
      spg: 2.3,
    });
    temp.push({
      name: "Cole Villers",
      pos: "PG",
      ppg: 23.2,
      mpg: 22.4,
      rpg: 4.5,
      apg: 5.0,
      fpg: 2.0,
      bpg: 2.0,
      spg: 2.3,
    });
    temp.push({
      name: "Luke Brown",
      pos: "PG",
      ppg: 24.1,
      mpg: 25.2,
      rpg: 6.5,
      apg: 2.3,
      fpg: 2.9,
      bpg: 2.3,
      spg: 2.2,
    });
    setPeople(temp);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const makePeople = () => {
    if (!people) {
      return <Spinner animation="border" size="md" />;
    } else {
      return (
        <Row>
          {people.map((person) => {
            return (
              <Col sm={4}>
                <Player prps={person} />
              </Col>
            );
          })}
        </Row>
      );
    }
  };

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
          Recruit AI: For recruiters
        </h1>
        <h2 style={{ ...hs, marginBottom: "30%" }}>
          Find a better fit<a style={{ color: "#EF7F4D" }}>.</a>
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
          Basketball AIaas.
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
              We have implemented a comprehensive suite of features for
              recruiters.
            </p>
          </Container>
        </Jumbotron>
        <h2>Player Comparisions:</h2>
        <hr />
        <Form.Group>
          <Form.Label>Search a player in our database:</Form.Label>
          <br />
          <Form.Label class="text-warning">
            Note, this is an experimental feature.
          </Form.Label>
          <Form.Control
            placeholder="Player Name"
            value={name}
            onChange={(e) => updateName(e.target.value)}
            required
          />
          <br />
          <Button
            onClick={(e) => {
              getPlayerComparision();
            }}
          >
            Search
          </Button>
          <br />
        </Form.Group>

        <Card>
          <Card.Header>Key Info</Card.Header>
          <Card.Body>
            <Card.Text>
            <div>
              {Graph && (
                <Image
                  src={Graph}
                  style={{
                    width: "100%",
                  }}
                />
              )}
        </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <h3>More Info:</h3>
        <p>
          Recruiters will be able to compare different players and their stats. 
        </p>
        <h3>FAQ</h3>
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              How to use our suite?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Recruiters are equipped with three key features: (1) player
                comparisions, (2) player predictions, and (3) player matching.
                All tools are accessible through our web suite.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Where do we get our data?
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

export default Recruiters;
