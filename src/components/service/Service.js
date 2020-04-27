import React, { Component } from "react";
import { CardDeck, Card, Button, Container, Row, Col } from 'react-bootstrap';
import './Service.css'
import servicesData from '../../fixtures/servicesItems.js'
import $ from 'jquery'


export default class CNService extends Component {
    constructor(props) {
        super(props)
        this.state = {
            services: servicesData,
            serviceActive: 1
        }
        this.handleServiceActive = this.handleServiceActive.bind(this)
    }

    handleServiceActive(e, serviceId) {
        e.preventDefault();
        this.setState({serviceActive: serviceId})
        this.handleScrollSmooth()
    }

    handleScrollSmooth() {
        const idHash = "#cn-services-list-title";

        $('html, body').animate({
            scrollTop: $(idHash).offset().top -50
        }, 500, function(){
            window.location.hash = idHash;
        });

    }
    
    render() {
        const _this = this
        let listServices = this.state.services.filter((item) => item['id'] === this.state.serviceActive)[0]
        return(<section id="services" className="cn-services">
            <Container>
                <Row>
                    <Col>
                        <h2>Seriços & Produtos</h2>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col>
                        <div className="cn-services-cards-wrapper">
                            <CardDeck>
                                {this.state.services.map((service) => {
                                    return (
                                    <Card style={{ width: '18rem' }}>
                                        <div className="cn-services-card-image" style={{backgroundImage: 'url(' + service.image + ')'}}></div>
                                        <Card.Body>
                                            <Card.Title>{service.title}</Card.Title>
                                            <Card.Text>
                                            {service.description}
                                            </Card.Text>
                                            <Button variant="primary" onClick={(e) => _this.handleServiceActive(e, service.id) } className="btn-block btn-cn-primary">Visualizar Lista</Button>
                                        </Card.Body>
                                    </Card>)
                                })}
                            </CardDeck>
                        </div>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col>
                        <div className="cn-services-list-wrapper">
                            <Container>
                                <Row>
                                    <Col>
                                        <h2 id="cn-services-list-title">{listServices.title}</h2>
                                        <hr/>
                                    </Col>
                                </Row>
                                {listServices.items.map((item) => {
                                    return(
                                        <Row className="cn-services-list-item">
                                            <Col xs={3}>
                                                <div className="cn-services-list-item-img" style={{backgroundImage: 'url(' + item.image + ')'}}></div>
                                            </Col>
                                            <Col xs={9}>
                                                <div className="cn-services-list-item-body">
                                                    <h4>{item.title}</h4>
                                                    <hr/>
                                                    <p>{item.description}</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    )
                                })}
                            </Container>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </section>)
    }
}