"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Loader from "./loader";

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "10px",
};

export interface Position {
  lat: number;
  lng: number;
}

export interface MarkerType {
  position: Position;
  title: string;
}

interface Props {
  center: Position;
  markers: MarkerType[];
}

const apiKey: string = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

export default function GoogleMapComponent({ center, markers }: Props) {
  return (
    <LoadScript googleMapsApiKey={apiKey} loadingElement={<Loader />}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.position}
            title={marker.title}
            label={(index + 1).toString()}
            clickable={true}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}
