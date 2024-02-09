import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={6}>
                    <h1>Welcome to the Home Page</h1>
                    
                </Col>
            </Row>
        </Container>
    );
}

export default Home