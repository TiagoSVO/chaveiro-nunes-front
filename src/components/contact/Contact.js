import React from 'react';
import { FaWhatsapp, FaPhone, FaMailBulk } from 'react-icons/fa';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import './Contact.css'
import axios from 'axios'
import GMap from '../gmap/GMap'

// const API_KEY_GMAP = require('./api_key.js')

export default class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            subject: "",
            message: "",
        }

        this.changeName = this.changeName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeSubject = this.changeSubject.bind(this)
        this.changeMessage = this.changeMessage.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.gmap_api_key = API_KEY_GMAP || ""
        this.gmap_api_key = ""
    }

    changeName(e) {
        this.setState({name: e.target.value})
    }

    changeEmail(e) {
        this.setState({email: e.target.value})
    }

    changeSubject(e) {
        this.setState({subject: e.target.value})
    }

    changeMessage(e) {
        this.setState({message: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        axios({
          method: "POST",
          url:"http://localhost:3000/send", 
          data:  this.state
        }).then((response)=>{
          if (response.data.status === 'success'){
            alert("Mensagem enviada!"); 
            this.handleResetForm()
          }else if(response.data.status === 'fail'){
            alert("O envio da mensagem falhou.")
          }
        })
      }
    
      handleResetForm(){
         this.setState({name: '', email: '', subject: '', message: ''})
      }

    render() {
        return (
            <section id="contact" className="cn-contact">
                <Container>
                    <Row>
                        <Col>
                        <h2>Contato</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <hr/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <div className="cn-box-contact">
                        <Form id="cn-contact-form" onSubmit={this.handleSubmit}>
                            <Form.Group controlId="cn-contact-name">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control onChange={this.changeName} value={this.state.name} name="name" type="text" placeholder="Digite seu nome" />
                            </Form.Group>

                            <Form.Group controlId="cn-contact-email">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control onChange={this.changeEmail} value={this.state.email} name="email" type="email" placeholder="Digite seu e-mail" />
                            </Form.Group>

                            <Form.Group controlId="cn-contact-subject">
                            <Form.Label>Assunto</Form.Label>
                            <Form.Control name="subject" as="select" custom onChange={this.changeSubject} value={this.state.subject}>
                                <option value="">Escolha um assunto...</option>
                                <option value="duvidas">Dúvidas</option>
                                <option value="orcamentos">Orçamentos</option>
                                <option value="sugestoes">Sugestões</option>
                                <option value="outros">Outros</option>
                            </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="cn-contact-message">
                            <Form.Label>Mensagem</Form.Label>
                            <Form.Control onChange={this.changeMessage} value={this.state.message} as="textarea" placeholder="Escreva sua mensagem aqui" rows="3"/>
                            </Form.Group>

                            <Button className="btn-block btn-cn-primary" variant="primary" type="submit">
                            Enviar
                            </Button>
                        </Form>
                        </div>
                        </Col>
                        <Col>
                        <div className="cn-contact-numbers">
                            <Row>
                            <Col>
                                <div className="cn-contact-number">
                                <FaPhone size={22} color="5C6B99" />
                                <span>(61) 3233-8921</span>
                                </div>
                            </Col>
                            </Row>
                            <hr/>
                            <Row>
                            <Col>
                                <div className="cn-contact-number">
                                <FaWhatsapp size={22} color="5C6B99" />
                                <span>(61) 9.9964-1431</span>
                                </div>
                            </Col>
                            </Row>
                            <hr/>
                            <Row>
                            <Col>
                                <div className="cn-contact-number">
                                <FaMailBulk size={22} color="5C6B99" />
                                <span>rvo.bsb@gmail.com</span>
                                </div>
                            </Col>
                            </Row>
                        </div>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col>
                            <GMap isMarkerShown
                            googleMapURL={'https://maps.googleapis.com/maps/api/js?key='+ this.gmap_api_key + '&v=3.exp&libraries=geometry,drawing,places'}
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `400px` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                            />
                            
                        </Col>
                        <Col>
                            <div className="cn-contact-address">
                                <strong>Endereço:</strong> <span>SHCES Quadra 1205 Quiosque 15 próximo ao Bloco K, Cruzeiro Novo - Brasília/DF.</span><br/>
                                <strong>CEP:</strong> <span>70.658-250.</span>
                            </div>
                            <hr/>
                            <div className="cn-contact-worktime">
                                <h5>Horário de funcionamento:</h5>
                                <span>Segunda à Sexta das 8h às 20h</span><br/>
                                <span>Sábado das 8h às 16h</span><br/>
                                <span><strong>Plantão</strong> através do número: (61) 9.9964-1431</span><br/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}