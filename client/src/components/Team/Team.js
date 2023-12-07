import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import userpic from "./userpic.jpg";


const Team = () => {
  return (
    <div>
      <h5 className="m-4">TEAM MEMBERS</h5>
      <CardGroup className="m-4">
        <Card  className="team-card">
          <Card.Img
            variant="top"
            src={userpic}
            style={{borderRadius:"50%"}}
          />
          <Card.Body>
            <Card.Title>ASIF ZIA</Card.Title>
            <Card.Text>FrontEnd Developer</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card className="team-card">
          <Card.Img
            variant="top"
            src={userpic}
            style={{borderRadius:"50%"}}
          />
          <Card.Body>
            <Card.Title>ASIF ZIA</Card.Title>
            <Card.Text>FrontEnd Developer</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 8 mins ago</small>
          </Card.Footer>
        </Card>
        <Card className="team-card">
          <Card.Img
            variant="top"
            src={userpic}
            style={{borderRadius:"50%"}}
          />
          <Card.Body>
            <Card.Title>ASIF ZIA</Card.Title>
            <Card.Text>FrontEnd Developer</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 1 mins ago</small>
          </Card.Footer>
        </Card>
        <Card className="team-card">
          <Card.Img
            variant="top"
            src={userpic}
            style={{borderRadius:"50%"}}
          />
          <Card.Body>
            <Card.Title>ASIF ZIA</Card.Title>
            <Card.Text>FrontEnd Developer</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 5 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Team;
