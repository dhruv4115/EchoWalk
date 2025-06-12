import React from 'react';
import MapView from './components/MapView.jsx';
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <div style={{
      height: '100%',
      width: '100%',
      margin: 0,
      padding: 0,
      }}>
      <MapView />
    </div>
  );
}

export default App;