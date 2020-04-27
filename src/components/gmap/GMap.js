import React from 'react';
import { withGoogleMap, GoogleMap, Marker, withScriptjs } from "react-google-maps"

  
export default withScriptjs(withGoogleMap((props) =>
<GoogleMap
  defaultZoom={19}
  defaultCenter={{ lat:-15.7945938 , lng: -47.9360066 }}
>
  {props.isMarkerShown && <Marker position={{ lat:-15.7946938 , lng: -47.9360066 }} />}
</GoogleMap>
))

