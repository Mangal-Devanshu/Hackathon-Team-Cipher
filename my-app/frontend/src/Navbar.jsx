import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import './MyNavbar.css'; // Import custom CSS

function MyNavbar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
            <Container>
                {/* Logo or Brand Name */}
                <Navbar.Brand href="#home" className="brand-logo">PACE CLASSROOM</Navbar.Brand>

                {/* Hamburger menu for mobile view */}
                <Navbar.Toggle aria-controls="navbarScroll" />

                {/* Collapsible menu */}
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                        {/* Navigation links */}
                        <Nav.Link href="#home" className="nav-link-custom">Home</Nav.Link>
                        <Nav.Link href="#about" className="nav-link-custom">About</Nav.Link>
                        <NavDropdown title="Services" id="navbarScrollingDropdown" className="nav-link-custom">
                            <NavDropdown.Item href="#action/3.1">Lessons</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Quizzes</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">More</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Contact Us</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    {/* Search bar */}
                    <Form className="d-flex search-bar">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2 search-input"
                            aria-label="Search"
                        />
                        <Button variant="outline-light" className="custom-search-btn">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;
