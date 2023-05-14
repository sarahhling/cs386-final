import React from "react";
import { Row, Col, Placeholder, Image } from "react-bootstrap";

function HeadlineBodyPlaceholder() {
  return (
    <div>
      <Row>
        <Col xs={2}>
          <Image src="/placeholder_img.png" className="w-100"></Image>
        </Col>
        <Col>
          <Row>
            <Placeholder as="p" animation="glow">
              <Placeholder xs={2} bg="secondary" />
            </Placeholder>
          </Row>
          <Row>
            <Placeholder as="p" animation="glow">
              <Placeholder xs={9} bg="secondary" />
            </Placeholder>
          </Row>
          <Row>
            <Placeholder as="p" animation="glow">
              <Placeholder xs={4} bg="secondary" />
            </Placeholder>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default HeadlineBodyPlaceholder;
