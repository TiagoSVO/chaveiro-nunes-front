import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import './ButtonWhatsapp.css';

export default class ButtonWhatsapp extends React.Component {
    render() {
        return(<React.Fragment>
            <a id="cn-whatsapp-button" href="https://wa.me/5561999641431?text=Preciso de seu serviço" className="cn-whatsapp-button"><FaWhatsapp size={22}/></a>
        </React.Fragment>)
    }
}