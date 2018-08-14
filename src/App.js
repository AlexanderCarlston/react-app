import React, { Component } from 'react';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const myIcon = L.icon({
  iconUrl: userLocationURL,
  iconSize: [50, 82]
});

import './App.css';

class App extends Component {
  state = {
      lat: 51.505,
      lng: -0.09,
  }

  render() {
    const position = [this.state.location.lat, this.state.location.lng];
    return (
      <Map
      className="map"
      worldCopyJump={true}
      center={position}
      zoom={this.state.zoom}>
      <TileLayer
        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors and Chat location by Iconika from the Noun Project"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        this.state.haveUsersLocation ? 
        <Marker
          position={position}
          icon={myIcon}>
        </Marker> : ''
      }
      {this.state.messages.map(message => (
        <Marker
          key={message._id}
          position={[message.latitude, message.longitude]}
          icon={messageIcon}>
          <Popup>
            <p><em>{message.name}:</em> {message.message}</p>
            { message.otherMessages ? message.otherMessages.map(message => <p key={message._id}><em>{message.name}:</em> {message.message}</p>) : '' }
          </Popup>
        </Marker>
      ))}
    </Map>
    );
  }
}

export default App;
