import React, { Component } from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';

class Hero extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            isNavOpen: false,
            isModalOpen: false
          };
        }
          toggleModal() {
            this.setState({
                isModalOpen: !this.state.isModalOpen
            });
        }
    
    render(){
        return(
            <Container className="main d-flex align-items-center" >
                <Row className="d-flex align-items-center">
                    <Col id="heroText" md="6">
                <h1>Easy Recipes to discover!</h1>
                <p>Let us help you with new meal ideas.</p>
                <Button  id="signupButton" className=" btn btn-warning px-4 mr-2">Sign Up</Button>
                {/*<Button outline id="recipesButton" className=" btn btn-outline-secondary px-4" href='/recipes'>Browse Recipes</Button>*/}
                    </Col>
                    <Col md="6">
                    <img id="heroArt" alt="drawing of a cook" src="../images/hero_art.png"/>
                    </Col>
                </Row>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Get our Newsletter!</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Name</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">email</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={input => this.password = input} />
                            </FormGroup>
                            <Button type="submit" value="submit" color="warning">Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </Container>
        );
    };
}

export default Hero;