import React from "react";
import { Badge, Card, CardBody, CardImg, CardText, Alert } from "reactstrap";
import * as ReactDOM from "react-dom";

export default function ExtrasCard(props) {
  const image = props.img;

  return (
    <Card className="extras pop" onClick={() => {
      if (props.title !== "Members Only") return;
      if (document.getElementsByClassName('alert-wrapper').length > 0) return;  
      const alert = <Alert color="danger">Not a Member</Alert>
      const alertwrapper = document.createElement('div');
      alertwrapper.className = 'alert-wrapper';
      alertwrapper.style.cssText = `
        position: fixed;
        width: 100%;
        top: 15%;
        z-index: 10000;
      `;
      document.getElementById('root').appendChild(alertwrapper);
      ReactDOM.render(alert, alertwrapper);
      setTimeout(function() {
        ReactDOM.unmountComponentAtNode(alertwrapper);
        alertwrapper.remove();
      }, 2000);
    }}>
      <CardImg src={image} alt={props.title} />
      <CardBody>
        <CardText>{props.children}</CardText>
        <Badge color="primary">{props.title}</Badge>
      </CardBody>
    </Card>
  );
}