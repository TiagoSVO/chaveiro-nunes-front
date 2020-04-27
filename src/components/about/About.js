import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import photoAbout from '../../assets/imgs/20200331_111958.jpg'
import './About.css'

export default class CNAbout extends Component {
    render() {
        return(<section id="about" className="cn-about">
        <Container>
          <Row>
            <Col>
              <img className="img-responsive" src={photoAbout} alt="Foto para ilustrar a loja Chaveiro Nunes" />
            </Col>
            <Col xs={10}>
              <h2>Sobre</h2>
              <p>Chaveiro Nunes há 31 anos no Cruzeiro Novo com história e profissionalismo na área de chaveiro e serviços afins.</p>
              <p>Na busca da qualidade dos serviços já exerceu cursos em diversas áreas como abertura de cofres em geral, chaves automotivas codificadas, afiação de alicate e tesouras etc.</p>
            </Col>
          </Row>
        </Container>
      </section>)
    }
}