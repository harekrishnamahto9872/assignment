import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class MapContainer extends Component {
  state = {
    points :[],
    center: {
      lat: 22.258652,
      lng: 71.1923805
    }
  }
  
  fetchLocation = (name) =>{
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${name}&key=AIzaSyAUdQnLlhEULAQ9DQhUZrEDeZZR28Z5FGs`)
    .then(res=>{
      console.log("state res", res.data)
      this.setState({
        center : {
          lat: res.data.results[0].geometry.location.lat,
          lng: res.data.results[0].geometry.location.lng
         }
      })
    })
  }
  
  componentDidUpdate(prevProps)
  {
    if(prevProps!==this.props)
    {
      console.log("cdm called")
      console.log("cities list", this.props.cities)
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.props.selectedState}&key=AIzaSyAUdQnLlhEULAQ9DQhUZrEDeZZR28Z5FGs`)
    .then(res=>{
      console.log("state res", res.data)
      this.setState({
        center : {
          lat: res.data.results[0].geometry.location.lat,
          lng: res.data.results[0].geometry.location.lng
         }
      })

    for(var i=0;i<this.props.cities.length%20;i++)
    {
      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.props.cities[i].City}&key=AIzaSyAUdQnLlhEULAQ9DQhUZrEDeZZR28Z5FGs`)
    .then(res=>{
      console.log("city res", this.state.points)

      let point =  {
      name: this.props.cities[i].City,
      lat: res.data.results[0].geometry.location.lat,
      lng: res.data.results[0].geometry.location.lng
      }
      this.setState({
        points : [...this.state.points,point]
      }) 
                      
    })
    }
    })

    

    console.log("points found",this.state.points)
    }
    
  }
    

  
 
  render() {

    var markerList = this.state.points.map(point=>{
                  return (
                    <AnyReactComponent
            lat={point.lat}
            lng={point.lng}
            
          />
                  )
                })
        

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyAUdQnLlhEULAQ9DQhUZrEDeZZR28Z5FGs' }}
          center={this.state.center}
          defaultZoom={7}
        >
          {markerList}
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default MapContainer;














































// import React, { Component } from 'react'
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

 
// export class MapContainer extends Component {

//     state = {
//       points :[]
//     }

//     render() {
//         console.log(this.props)
//         var center= null
//         axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.props.selectedState}&key=AIzaSyAUdQnLlhEULAQ9DQhUZrEDeZZR28Z5FGs`)
//         .then(res=>{
//           console.log("state res", res.data)
//           center = {
//             lat: res.data.results[0].geometry.location.lat,
//             lng: res.data.results[0].geometry.location.lng
//            }
//         })


//         for(i=0;i<this.props.cities.length;i++)
//         {
//           axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.props.cities[i].City}&key=AIzaSyAUdQnLlhEULAQ9DQhUZrEDeZZR28Z5FGs`) 
//           .then(res=>{

//               console.log("city data ",res.data)
            
//               var point =  {
//                     name: this.props.cities[i].City,
//                     lat: res.data.results[0].geometry.location.lat,
//                     lng: res.data.results[0].geometry.location.lng
//                   }

//               this.setState({
//                 points : [...this.state.points,point]
//               })
            
//           })
          
//         }
//         console.log(this.state.points)

//           var bounds = new this.props.google.maps.LatLngBounds();
//           for (var i = 0; i < this.state.points.length; i++) {
//             bounds.extend({lat: this.state.points[i][1], lng: this.state.points[i][2]});
//           }

//           var markerList = this.state.points.map(point=>{
//             return (
//               <Marker
//               title={point.name}
//               name={point.name}
//               position={{lat: point.lat, lng: point.lng}} />
//             )
//           })

//         return (
//           <Map google={this.props.google} zoom={8}
          
//           onClick={this.onMapClicked}
//           bounds={bounds} >
     
//           {markerList}
     
          
//           </Map>
//         );
//       }
// }
 
// export default GoogleApiWrapper({
//   apiKey: ('AIzaSyAUdQnLlhEULAQ9DQhUZrEDeZZR28Z5FGs')
// })(MapContainer)