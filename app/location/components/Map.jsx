"use client"
import { MapContainer, TileLayer, Marker } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import "leaflet-defaulticon-compatibility"
import { useEffect, useRef, useState } from "react"
import { ClipLoader } from "react-spinners"

export default function Map({ position }) {
  const [isMounted, setIsMounted] = useState(false)
  const mapRef = useRef(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (position && mapRef.current) {
      const mapInstance = mapRef.current
      mapInstance.setView([position.latitude, position.longitude], 14)
    }
  }, [position])

  return (
    <div className="w-1/2">
      {isMounted ? (
        <MapContainer
          ref={mapRef}
          center={[46.603354, 2.661821]}
          zoom={6}
          style={{ height: "100%", width: "100%", zIndex: 0, borderRadius: 20 }}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAP_TOKEN}`}
          />
          {position ? (
            <Marker position={[position.latitude, position.longitude]}></Marker>
          ) : null}
        </MapContainer>
      ) : (
        <ClipLoader size={35} color="#EE7526" />
      )}
    </div>
  )
}
