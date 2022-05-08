import React from "react";
import { Accordion, Col, Container, Image, Row } from "react-bootstrap";

const Faq = () => {
  return (
    <div id="faq" className='pt-5'>
      <Container>
        <div className="pt-5">
          <h1 className="fs-1  fw-bolder">Frequently Ask Questions</h1>
        </div>
        <br />
        <Row className='align-items-center'>
          <Col xs={12} md={6}>
            <Image fluid src="https://i.ibb.co/qkjbqsX/image-removebg-preview.png" />
          </Col>
          <Col xs={12} md={6}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header><strong>What is Furniture Mart?</strong></Accordion.Header>
                <Accordion.Body className="fw-bold">
                  Furniture Mart is a Warehouse maintainance website. Here the website owner can manage every products in their warehouse. Here our Furniture Mart fulfilled with deisignable Furnitures.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header><strong>Who can register?</strong>
                </Accordion.Header>
                <Accordion.Body className="fw-bold">
                  Anyone can, from large whole-sale operators to single purchas or even a local expert offering a furniture setup tour of their town or city. You just need to be aged 18 or over and comply with all applicable laws and regulations in which you operate.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header><strong>How much does it cost?</strong>
                </Accordion.Header>
                <Accordion.Body className="fw-bold">
                  We review all new product listings to ensure they are set up for success with our customers. Product Quality Reviews are required and carry a nonrefundable nominal cost per product. Our reviews ensure your product is best positioned to generate bookings.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header><strong>How much quantity I can restock?</strong>
                </Accordion.Header>
                <Accordion.Body className="fw-bold">
                  You can restock all your goods with us. We have thousands of locations, that can blow your mind.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Faq;