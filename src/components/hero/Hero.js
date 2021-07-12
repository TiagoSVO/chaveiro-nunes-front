import React, { Component } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import slide1 from '../../assets/imgs/20200331_111944.jpg'
import mainCarousselItems from '../../fixtures/mainCarousselItems.js'
import './Hero.css'

export default class CNHero extends Component {
    constructor(props) {
        super(props)
        this.state = {
            carouselItems: mainCarousselItems,
        }
    }

    render() {
        return (<header id="hero" className="cn-hero">        
        <Container>
          <Row>
            <Col>
            <Carousel>
              {this.state.carouselItems.map((item) => {
                return (
                  <Carousel.Item style={{backgroundImage: 'url(' + item.image.default + ')'}}>
                    <Carousel.Caption>
                      <h3>{item.title}</h3>
                      <p>{item.label}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                )
              })}
            </Carousel>
            </Col>
          </Row>
        </Container>
      </header>)
    }
}
