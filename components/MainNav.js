import React from "react";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import Link from "next/link"

const MainNav = () => {
    return (
        <>
            <Navbar className="fixed-top navbar-dark" bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand>Mayara Rodrigues</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link href="/" passHref><Nav.Link>Movies</Nav.Link></Link>
                            <Link href="/about" passHref><Nav.Link>About</Nav.Link></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br />
            <br />
        </>
    )
}

export default MainNav