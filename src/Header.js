import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './App.css';
const Header = () => {
  return(
    <Container fluid>
        <Row className='justify-content-md-center mt-5'>
            <Col>
             <Card className='customCard'>
                 <Card.Body className='customCard'>
                     <Card.Title className='headerText'>Application Traffic Monitoring System </Card.Title>
                 </Card.Body>
             </Card>
            </Col>
        </Row>
    </Container>
  );
}
export default Header;