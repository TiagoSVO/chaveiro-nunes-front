import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import './Footer.css';

export default class CNFooter extends Component {
    render() {
        return (<footer id="footer" className="cn-footer">
                    <Row>
                        <Col xs={3} className="visible-xs"></Col>
                        <Col xs={6} md={12}>
                            <p><strong>CHAVEIRO NUNES</strong> | SHCES Quadra 1205 Quiosque 15 próximo ao Bloco K, Cruzeiro Novo - Brasília/DF, 70.658-250 - (61) 9.9964-1431 / (61) 3233-8921</p>
                        </Col>
                        <Col xs={3} className="visible-xs"></Col>
                    </Row>
                </footer>)
    }
}

