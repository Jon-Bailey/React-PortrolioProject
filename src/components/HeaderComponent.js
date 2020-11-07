import React, { Component }  from 'react';
import { Nav, NavLink, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Button, Container,Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';


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
        <Container className="themed-container mx-0" fluid={true}>
            <Navbar sticky="top" expand="md" className="shadow-sm">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src="../images/logo2.png" height="30" width="50" alt="Logo" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="justify-content-end">
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/recipes">
                                        <i className="fa fa-home fa-lg" /> Recipes
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <span className="navbar-text ml-auto">
                                <Button outline className="btn-warning text-white btn-outline-warning" onClick={this.toggleModal}>
                                <i className="fa fa-sign-in fa-lg" /> Sign Up
                                </Button>
                            </span>
                        </Collapse>
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