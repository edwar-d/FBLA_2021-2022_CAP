import React from "react";

import {
  Container,
} from "reactstrap";

export default function Footer() {
  return (
    <footer
      className="footer"
      data-background-color="black"
      style={{ position: "absolute", flexshrink: 0, width: "100%" }}
    >
      <Container>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/rooms">Browse Rooms</a>
            </li>
            <li>
              <a href="https://docs.google.com/document/d/1A5vFPKq_oCNJBmBTrWmw9x27W0zfEmxuksarF12UWPw/edit?usp=sharing">Privacy Policy</a>
            </li>
            <li>
              <a href="https://docs.google.com/document/d/16a1EmV0CLr6568FhlufUWvXaxS2Qz-bBm0DbpEUYb6E/edit?usp=sharing">Code of Conduct</a>
            </li>
            <li>
              <a href="https://docs.google.com/document/d/1pEWF55iaHt_IEb13b9fP6J6enSkvTS4lwLFbM6K8m_k/edit?usp=sharing">Terms and Conditions</a>
            </li>
          </ul>
        </nav>
        <div style={{ float: "right" }}>
          <a href="/">Homestead FBLA E-Business</a>
        </div>
      </Container>
    </footer>
  );
}