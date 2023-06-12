"use client"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { DivIcon } from "leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import "leaflet-defaulticon-compatibility"
import { useState, useEffect } from "react"
import { ClipLoader } from "react-spinners"

function Map() {
  const [userLocation, setUserLocation] = useState(null)

  const customIcon = (price) => {
    return new DivIcon({
      className: "custom-icon",
      html: `<div class="flex items-center font-medium justify-center w-12 h-6 bg-white rounded-xl search-bar-shadow text-lexend text-[14px]" >${price}€</div>`,
    })
  }

  useEffect(() => {
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords
            setUserLocation([latitude, longitude])
          },
          (error) => {
            console.error(error)
          }
        )
      } else {
        setUserLocation([46.603354, 2.661821])
      }
    }

    getUserLocation()
  }, [])

  return userLocation ? (
    <MapContainer
      center={userLocation}
      zoom={11}
      style={{ height: "600px", width: "100%", zIndex: 0, borderRadius: 20 }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAP_TOKEN}`}
      />
      <Marker position={[45.6739, 4.9529]} icon={customIcon("123")}>
        <Popup>Hey ! I live here</Popup>
      </Marker>
    </MapContainer>
  ) : (
    <ClipLoader size={30} color="#296CCEFF" />
  )
}

export default Map
