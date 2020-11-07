import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Hero extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <Container className="main" >
                <Row className="align-items-center">
                    <Col id="hero-text" md="6">
                <h1>Easy Recipes to discover!</h1>
                <p>Let us help you with new meal ideas.</p>
                <button role="button" id="signupButton" class=" btn btn-warning px-4 mr-2">Sign Up</button>
                <button role="button" id="recipesButton" class=" btn btn-outline-secondary px-4">Browse Recipes</button>
                    </Col>
                    <Col md="6">
                    <img id="hero-image" src="../images/hero_art.png"/>
                    </Col>
                </Row>
            </Container>
        );
    };
}

export default Hero;