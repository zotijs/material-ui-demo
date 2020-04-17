import React from "react";
import { Map, LayersControl, TileLayer } from "react-leaflet";
import { mapConfig } from "configs";
import "./SimpleMap.css";

const { BaseLayer, Overlay } = LayersControl;

const SimpleMap = ({ classes, ...restProps }) => {
  const { satelite_url, light_url, dark_url, position, zoom } = mapConfig;

  return (
    <div>
      <Map center={position} zoom={zoom}>
        <LayersControl position="topright">
          <BaseLayer checked name="Mapbox Satelite">
            <TileLayer url={satelite_url} />
          </BaseLayer>
          <BaseLayer name="Mapbox Light">
            <TileLayer url={light_url} />
          </BaseLayer>
          <BaseLayer name="Mapbox Dark">
            <TileLayer url={dark_url} />
          </BaseLayer>
        </LayersControl>
      </Map>
    </div>
  );
};

export default SimpleMap;
