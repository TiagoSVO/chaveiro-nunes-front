import React from 'react';
import './Navbar.css';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap'
import $ from 'jquery'
import logo from '../../assets/imgs/logo.png';

export default class CNNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleScrollSmooth = this.handleScrollSmooth.bind(this);
        this.logo = logo
    }
      
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    };
      
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };

    handleScroll() {
        const navbar = document.getElementById('cn-navbar')
        if (window.pageYOffset >= 10) {
            navbar.classList.add("sticky")
          } else {
            navbar.classList.remove("sticky");
          }
    }

    handleSearchButton(e) {
        console.log(e.target.previousSibling.value)
    }

    handleScrollSmooth(e) {
        e.preventDefault();
        const target = e.currentTarget;
        const idHash = target.hash;

        $('html, body').animate({
            scrollTop: idHash === "#home" ? 0 : $(idHash).offset().top
        }, 500, function(){
            window.location.hash = idHash;
        });

    }

    render() {
        return (
            <Navbar id="cn-navbar" bg="cn-nav" expand="lg" variant="dark" sticky="top">
                <Navbar.Brand onClick={this.handleScrollSmooth} href="#home">
                {/* {this.logo ? <img className="img-responsive" src={this.logo} alt="Logo Chaveiro Nunes"/> : <strong>CHAVEIRO NUNES</strong> } */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto pull-right">
                        <Nav.Link onClick={this.handleScrollSmooth} href="#hero">Início</Nav.Link>
                        <Nav.Link onClick={this.handleScrollSmooth} href="#contact">Contato</Nav.Link>
                        <Nav.Link onClick={this.handleScrollSmooth} href="#services">Serviço</Nav.Link>
                        <Nav.Link onClick={this.handleScrollSmooth} href="#about">Sobre</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="O que você procura?" className="mr-sm-2" />
                        <Button className="btn btn-light" onClick={this.handleSearchButton}>Pesquisar</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}