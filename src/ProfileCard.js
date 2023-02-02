import React from "react";
import { Container, Card, Col, Button } from "react-bootstrap";

const ProfileCard = (props) => {
  console.log(props);

  return (
    <div className="App col-sm-3">
      <Container >
        <Col >
          <Card>
          <Card.Img variant="top" src={props.Img}  className="image-size" />
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>
                <h2>
                    {props.handle}
                </h2>
                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vitae molestie magna. Vivamus sed molestie enim, eu convallis
                mauris. Aliquam pharetra velit ac enim maximus, a commodo augue
                hendrerit. Phasellus at aliquam est */}
              </Card.Text>
              {/* <Button variant="primary">Read More</Button> */}
            </Card.Body>
          </Card>
        </Col>
      </Container>
    </div>
  );
};

export default ProfileCard;
