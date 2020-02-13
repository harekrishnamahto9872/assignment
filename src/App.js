import React from 'react';
import './App.css';
import Searchbar from './components/Searchbar'
import MapContainer from './components/MapContainer'
function App() {
  return (
    <div className="App">
        <Searchbar />   
        <MapContainer />
    </div>
  );
}

export default App;
