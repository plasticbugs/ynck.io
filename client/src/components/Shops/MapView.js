import React from 'react';
import { divIcon } from 'leaflet';
import { Map, Marker, Popup, TileLayer, Icon } from 'react-leaflet';

export class MapView extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    const icon = divIcon({className: 'my-div-icon'});
    return (
      <div>
        <Map
          style={{height: this.props.height || '40vh', width: this.props.width || '100%'}}
          center={[this.props.lat, this.props.lon]}
          zoom={this.props.zoom || 12}>
          <TileLayer
            url="https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGV2b253IiwiYSI6ImNqM2czam9wMDAxd2kycHBpNW5hdWZyYW0ifQ.M11WFf81WvFf68oxw32ToA"
             />
            <Marker icon={icon} position={[this.props.lat, this.props.lon]}>
            </Marker>
        </Map>
      </div>
    );
  }
}


export default MapView;