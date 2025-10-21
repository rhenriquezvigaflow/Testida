import React, { Component } from "react";
import { Card, Col } from "reactstrap";

const cardStyle = {
  paddingLeft: "0.1vw",
  paddingRight: "0.1vw"
};

const titleStyle = {
  fontSize: "0.8vw",
  paddingBottom: "0.25vw",
  paddingTop: "0vw",
  textTransform: "uppercase",
  color: "#aaacae"
};

const valueStyle = {
  fontSize: "0.8vw",
  paddingBottom: "0vw",
  paddingTop: "0.1vw",
  fontWeight: "700"
};

const hr = {
  width: "80%",
  height: "0.05vw",
  marginLeft: "0.1vw",
  marginRight: "0.1vw",
  marginTop: "0.25vw",
  backgroundColor: "#e5e5e5"
};

export default class Tarjetitafs extends Component {
  loadGraph() {
    this.props.clickMe(this.props.number, this.props.name);
  }

  render() {
    return (
      <Col
        sm="2"
        md="2"
        lg="2"
        xl="2"
        style={cardStyle}>
        <Card
          className={`widget-chart widget-chart2 card-btm-border px-3 card-shadow-primary${
            typeof this.props.max === "undefined" ||
            (
              Number(this.props.value) <= Number(this.props.max) &&
                Number(this.props.value) >= Number(this.props.min)
            )
              ? " border-success"
              : " border-warning"
          }`}
          style={{
            background:
              this.props.selected === this.props.number ? "#dbdbdb" : "#ffffff"
          }}
          onClick={() => {
            this.loadGraph();
          }}>
          <div className="widget-chat-wrapper-outer align-items-center">
            <div className="widget-chart-content">
              <div style={titleStyle}>{this.props.name}</div>

              <div style={hr} />

              <div style={valueStyle}>
                {this.props.value}{" "}
                <span style={{ fontSize: "0.8vw", fontWeight: "400" }}>
                  {this.props.unit}
                </span>
              </div>
            </div>
          </div>
        </Card>
      </Col>
    );
  }
}
