import React from "react";
import { Card, CardBody, CardText } from "reactstrap";

export default function Award(props) {
  return (
    <Card className="award text-center">
      <CardBody>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-award"
          width="100"
          height="100"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="#2c3e50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="9" r="6" />
          <polyline
            points="9 14.2 9 21 12 19 15 21 15 14.2"
            transform="rotate(-30 12 9)"
          />
          <polyline
            points="9 14.2 9 21 12 19 15 21 15 14.2"
            transform="rotate(30 12 9)"
          />
        </svg>
        <CardText>{props.children}</CardText>
      </CardBody>
    </Card>
  );
}