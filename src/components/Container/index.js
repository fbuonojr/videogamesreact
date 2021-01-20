import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Contain() {
    return (
        <Container fluid>
            <Row className="text-center">
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
        </Container>
    );
}

export default Contain;