import React from "react";
function GoogleMaps() {
  return (
    <div>
      {/*----------- google map start-------------*/}
      <iframe
        title="google_map"
        style={{ width: "100%", height: "600px" }}
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=Baliadanga%20Abdur%20Rahman%20CC,&t=&z=11&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
      ></iframe>
      {/*----------- google map end -------------*/}
    </div>
  );
}

export default React.memo(GoogleMaps);
