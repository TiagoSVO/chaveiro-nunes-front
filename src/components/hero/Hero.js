import React, { Component } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import slide1 from '../../assets/imgs/20200331_111944.jpg'
import './Hero.css'

export default class CNHero extends Component {
    render() {
        return (<header id="hero" className="cn-hero">        
        <Container>
          <Row>
            <Col>
            <Carousel>
              <Carousel.Item style={{backgroundImage: 'url(' + slide1 + ')'}}>
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{backgroundImage: 'url(' + slide1 + ')'}}>
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{backgroundImage: 'url(' + slide1 + ')'}}>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </Col>
          </Row>
        </Container>
      </header>)
    }
}