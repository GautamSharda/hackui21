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
import Logo from "../navigation/Logo";
import MainBackground from "./img/main-background.jpg"
import Zion from "./img/zionpic.jpg"

function Players() {
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
          Recruit AI: For players
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
           <a style={{ color: "#EF7F4D" }}>For Players</a>
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
              Players looking to find their next big step in their careers can trust Recruit AI.
            </p>
            <p>
              We provide players with our collection of data and resources to 
              determine their future school. Our Machine Learning Algorithm will take in the players stats and will identify their 
              top 5 schools. This allows the players to find the optimal setting for their future group.
            </p>
          </Container>
        </Jumbotron>
        <p>
          After the player inputs their statistical information, we provide them with an individualized player card holding their stats and information. 
          This will be routinely updated after each high school game and stored into our database. Below is an example of a player card that a user might have.
        </p>

        <Card>
          <Card.Header>Zion Williamson</Card.Header>
          <Card.Body>
            <Card.Img variant="top" src={Zion}/>
            <Card.Text>
              <a style={{ fontWeight: "bold" }}>College</a>: Duke
            </Card.Text>
            <Card.Text>
              <a style={{ fontWeight: "bold" }}>Games</a>: 33
            </Card.Text>
            <Card.Text>
              <a style={{ fontWeight: "bold" }}>Minutes/Game</a>: 30.0
            </Card.Text>
            <Card.Text>
              <a style={{ fontWeight: "bold" }}>Rebounds/Game</a>: 8.9
            </Card.Text>
            <Card.Text>
              <a style={{ fontWeight: "bold" }}>Assists/Game</a>: 2.1
            </Card.Text>
            <Card.Text>
              <a style={{ fontWeight: "bold" }}>Steals/Game</a>: 2.1
            </Card.Text>
            <Card.Text>
              <a style={{ fontWeight: "bold" }}>Blocks/Game</a>: 2.8
            </Card.Text>
            <Card.Text>
              <a style={{ fontWeight: "bold" }}>Points/Game</a>: 1.8
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <p>
          At Recruit AI, we strive for the success of our future basketball generation, 1 game, 1 shot at a time. 
          Click on Recruiters to learn more about what resources are enabled for recruiters.
        </p>
        
        <br />
      </Container>
      <Footer />
    </div>
  );
}

export default Players;
