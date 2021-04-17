import "./Navigation.css";
import React from "react";
import { Container, Image } from "react-bootstrap";
import Logo from "./logo.png";

function Footer() {
  return (
    <Container
      fluid
      className="footer"
      style={{ lineHeight: "1rem", minHeight: "10rem", padding: "1.6rem" }}
    >
      <center>
        {" "}
        <p>Recruit Ai</p>
        <p>More information here</p>
        <a href="https://pornhub.com">
          <Image
            src={Logo}
            style={{ height: "4rem", marginTop: ".4rem" }}
            thumbnail
          />
        </a>
      </center>
    </Container>
  );
}

export default Footer;
