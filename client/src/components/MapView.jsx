import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});


const MapView = () => {
  const [position, setPosition] = useState(null);

  useEffect(() => {
  console.log("🌍 useEffect triggered");

  if (!navigator.geolocation) {
    console.error("❌ Geolocation not supported");
    setPosition([25.4358, 81.8463]);
    return;
  }

  const geoTimeout = setTimeout(() => {
    console.warn("⚠️ Geolocation timed out after 8s");
    setPosition([25.4358, 81.8463]);
  }, 8000); // 8 seconds timeout

  console.log("📡 Requesting current position...");

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      clearTimeout(geoTimeout);
      const { latitude, longitude } = pos.coords;
      console.log("✅ Location fetched from geolocation:", latitude, longitude);
      setPosition([latitude, longitude]);
    },
    (err) => {
      clearTimeout(geoTimeout);
      console.error("❌ Geolocation error caught:", err);
      setPosition([25.4358, 81.8463]);
    },
    { enableHighAccuracy: true, timeout: 7000 }
  );
}, []);

console.log("📦 position state:", position);




  // Mock data for echoes
  const mockEchoes = [
    {
      id: 1,
      lat: 25.4348,
      lng: 81.8463,
      description: "Echo from Civil Lines",
      audioUrl: "https://www.example.com/audio1.mp3"
    },
    {
      id: 2,
      lat: 25.4375,
      lng: 81.8489,
      description: "Echo from MNNIT",
      audioUrl: "https://www.example.com/audio2.mp3"
    }
  ];

  return position ? (
  <>
    {console.log("📍 Rendering map with position:", position)}
    <div style={{ height: '100%', width: '100%', position: 'relative', zIndex: 0 }}>
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
  attribution="© OpenStreetMap contributors, © CARTO"
  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
/>



      <Marker position={position}>
        <Popup>Your current location</Popup>
      </Marker>

      {mockEchoes.map((echo) => (
        <Marker key={echo.id} position={[echo.lat, echo.lng]}>
          <Popup>
            <p>{echo.description}</p>
            <audio controls src={echo.audioUrl}></audio>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
    </div>
  </>
) : (
  <p>Fetching location...</p>
);

};

export default MapView;
