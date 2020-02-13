import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends React.Component {
    render() {
        var points = [
          { lat: 42.02, lng: -77.01 },
          { lat: 42.03, lng: -77.02 },
          { lat: 41.03, lng: -77.04 },
          { lat: 42.05, lng: -77.02 }
          ]
          var bounds = new this.props.google.maps.LatLngBounds();
          for (var i = 0; i < points.length; i++) {
            bounds.extend(points[i]);
          }

          var markerList = points.map(point=>{
            return (
              <Marker
              title={'some title.'}
              name={'SOMA'}
              position={{lat: point.lat, lng: point.lng}} />
            )
          })

        return (
          <Map google={this.props.google} zoom={8}
          initialCenter={{
            lat: 40.854885,
            lng: -88.081807
          }}
          onClick={this.onMapClicked}
          bounds={bounds} >
     
          {markerList}
     
          
          </Map>
        );
      }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAUdQnLlhEULAQ9DQhUZrEDeZZR28Z5FGs')
})(MapContainer)