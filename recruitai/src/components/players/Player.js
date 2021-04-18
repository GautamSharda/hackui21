import React from "react";
import "./Player.css";
import { Container, Row, Button, Card, Form } from "react-bootstrap";
import withWindowDimensions from "../navigation/withWindowDimensions";

class Player extends React.Component {
  state = { featureText: "" };

  render() {
    const imageSrc = this.props.img
      ? this.props.img
      : require("../navigation/logo.svg"); //backup image

    let positionButton = [];
    if (this.props.positions) {
      positionButton = this.props.teams.map((position, index) => {
        return (
          <div class={"position-button"} key={index}>
            {position}
          </div>
        );
      });
    }

    if (this.props.isFeatured) {
      setTimeout(
        () => this.setState({ featureText: this.props.description }), // Show more data
        500
      );
    } else if (this.state.featureText) {
      setTimeout(() => this.setState({ featureText: "" }), 400);
    }

    let cardStyle = {
      width: "100%",
    };

    let window = this.props.windowWidth;
    let padding;

    // dynamically determine left and right padding around people grid
    if (window >= 992) {
      // lg or xl
      padding = 2;
    } else {
      // xs
      padding = 1;

      return (
        <div
          style={{ display: "flex", justifyContent: "center", height: "100%" }}
        >
          <Card style={cardStyle}>
            <Card.Body className="player-card">
              <Card.Title
                style={{
                  padding: 0,
                  marginLeft: "48px",
                  backgroundColor: "#fff",
                  paddingLeft: "1rem",
                  minHeight: "48px",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <h4 style={{ verticalAlign: "middle", float: "left" }}>
                  {this.props.prps.name}
                </h4>
              </Card.Title>
              <hr />

              <Card.Text>
                <a style={{ fontWeight: "bold" }}>Minutes/Game</a>:{" "}
                {this.props.prps.mpg}
              </Card.Text>
              <Card.Text>
                <a style={{ fontWeight: "bold" }}>Rebounds/Game</a>:{" "}
                {this.props.prps.rpg}
              </Card.Text>
              <Card.Text>
                <a style={{ fontWeight: "bold" }}>Assists/Game</a>:{" "}
                {this.props.prps.apg}
              </Card.Text>
              <Card.Text>
                <a style={{ fontWeight: "bold" }}>Fouls/Game</a>:{" "}
                {this.props.prps.fpg}
              </Card.Text>
              <Card.Text>
                <a style={{ fontWeight: "bold" }}>Points/Game</a>:{" "}
                {this.props.prps.ppg}
              </Card.Text>
              <Card.Text>
                <a style={{ fontWeight: "bold" }}>Steals/Game</a>:{" "}
                {this.props.prps.spg}
              </Card.Text>

              <Card.Text
                style={{
                  padding: "1rem 0 1rem 0",
                  overflow: "hidden",
                  whiteSpace: "pre-wrap",
                  maxHeight: "280px",
                  overflowY: "auto",
                }}
              >
                {this.state.featureText}
              </Card.Text>
              {this.state.featureText && (
                <div style={{ paddingBottom: ".4rem" }}> </div>
              )}

              <div class="position-buttons">{positionButton}</div>
              <div
                style={{ position: "absolute", right: "1rem", bottom: "1rem" }}
              >
                <Button
                  style={{}} //do this
                  onClick={() => {
                    console.log(this.props.members);
                    this.props.callback(this.props.index);
                  }}
                >
                  {this.props.isFeatured ? "Close" : "See more"}
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      );
    }
  }
}

export default Player;
