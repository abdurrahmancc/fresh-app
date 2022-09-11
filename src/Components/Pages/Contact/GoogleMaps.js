import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 39.093746596310886,
  lng: -111.86644557263111,
};

function GoogleMaps() {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        <Marker position={center} />
        {/* <></> */}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(GoogleMaps);
