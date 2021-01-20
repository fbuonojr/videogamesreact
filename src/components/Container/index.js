import React from 'react';
import { Container } from 'react-bootstrap';
import Row from '../Row/index';
import Col from '../Column/index';

function Contain() {
    return (
        <Container fluid>
            <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
        </Container>
    );
}

export default Contain;