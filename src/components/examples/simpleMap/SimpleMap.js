import React from "react";
import { Map, TileLayer } from "react-leaflet";
//import { satelite_url } from "components/maps/config";

const SimpleMap = ({ classes, ...restProps }) => {
  const position = [37.9838, 23.7275];
  const zoom = 10;
  //const url = urls.satelite_url;
  //const attribution = '';

  return (
    <div>
      <Map
        style={({ height: "100%" }, { width: "100%" })}
        center={position}
        zoom={zoom}
      >
        <TileLayer url="https://api.mapbox.com/styles/v1/zotijs/ck8zq0tcj0msz1iqmpor8f343/tiles/256/{z}/{x}/{y}?&access_token=pk.eyJ1Ijoiem90aWpzIiwiYSI6ImNrOHpsdHNudjBzcDMzZnM3OHR6MjNiZW8ifQ.VaU-JxxJRgk9nTxZiuPeuQ" />
      </Map>
    </div>
  );
};

export default SimpleMap;
