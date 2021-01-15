import React, { Component } from 'react';
import { Map, TileLayer, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import data from '../assets/data';
import Markers from './VenueMarkers';


class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: [
      	{
        	id: 1,
          coords: [[40.41177, -3.67648], [40.41164, -3.67645], [40.41147, -3.67638]]
        }, {
        	id: 2,
          coords: [[51.505, -0.09], [51.5, -0.085]]
        }
      ],
      currentLocation: { lat: 52.52437, lng: 13.41053 },
      zoom: 12,
    }
  }

  render() {
    const { currentLocation, zoom } = this.state;

    return (
      <Map center={currentLocation} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />

        <Markers venues={this.props.data.venues}/>

        {this.state.routes.map(route => 
        		<Polyline
              key={route.id}
              positions={route.coords}
              onClick={() => alert('clicked ' + route.id)}
              />
        	)
        }
      </Map>
    );
  }
}

export default MapView;
