import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, Collapse, NavItem, Button, Container,Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
          };
          this.toggleNav = this.toggleNav.bind(this);
          this.toggleModal = this.toggleModal.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    
    render() {
    return (
        <Container>
            <Navbar  sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src="../images/logo2.png" height="40" width="70" alt="Logo" /></NavbarBrand>
                        <Button className="navbar-toggler" onClick={this.toggleNav} />
                        <Collapse  isOpen={this.state.isNavOpen} navbar>
                            <Nav  navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to='/home'>
                                     Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to ='/recipes'>
                                     Recipes
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <span className="navbar-text ml-auto">
                                <Button outline className="btn-warning text-white btn-outline-warning" onClick={this.toggleModal}>
                                 Sign Up
                                </Button>
                            </span>
                        </Collapse>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                         </button>
                    </div>
                </Navbar>
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
    }
}


export default Header;