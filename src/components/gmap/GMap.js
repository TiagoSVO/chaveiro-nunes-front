import React from 'react';
import { withGoogleMap, GoogleMap, Marker, withScriptjs, InfoWindow } from "react-google-maps"


class CNGMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggleInfoBox: false
    }
  }

  handleClickMarker() {
    this.setState({toggleInfoBox: !this.state.toggleInfoBox})
  }

  render() {
    const props = this.props
    return (
      <GoogleMap 
      defaultZoom={19}
      defaultCenter={{ lat:-15.7945938 , lng: -47.9360066 }}
    >
    
      {props.isMarkerShown && <Marker onClick={this.handleClickMarker.bind(this)} position={{ lat:-15.7946938 , lng: -47.9360066 }}> 
      {this.state.toggleInfoBox && <InfoWindow onCloseClick={this.handleClickMarker.bind(this)}>
      <div >
        Chaveiro Nunes
        SHCES Qd 1205, Quiosque 03 - Cruzeiro Novo
        Brasília - DF
        70658-370
        Brasil
        <a href={'https://maps.google.com/maps?ll=-15.794689,-47.936024&z=22&t=m&hl=pt-BR&gl=US&mapclient=apiv3&cid=11223522394579881957'}>Visualize no Google Maps</a>
      </div>
      </InfoWindow>}
      </Marker>}
    </GoogleMap>
    )
  }
}

export default withScriptjs(withGoogleMap((props) =>  <CNGMap {...props}/>))



/*  
export default withScriptjs(withGoogleMap((props) =>
<GoogleMap
  defaultZoom={19}
  defaultCenter={{ lat:-15.7945938 , lng: -47.9360066 }}
>
  {props.isMarkerShown && <Marker position={{ lat:-15.7946938 , lng: -47.9360066 }} />}
</GoogleMap>
))

*/