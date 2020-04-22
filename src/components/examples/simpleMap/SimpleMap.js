import React from "react";
import { Map, LayersControl, TileLayer } from "react-leaflet";
import { mapConfig } from "configs";
import "./SimpleMap.css";

const { BaseLayer } = LayersControl;

const SimpleMap = ({ classes, ...restProps }) => {
  const {
    satelite_url,
    light_url,
    dark_url,
    selectable_layer_url,
    position,
    zoom,
  } = mapConfig;

  return (
    <div>
      <Map center={position} zoom={zoom} onClick={console.log}>
        <LayersControl position="topright">
          <BaseLayer checked name="Mapbox Satelite">
            <TileLayer url={satelite_url} zIndex={1} />
          </BaseLayer>
          <BaseLayer name="Mapbox Light">
            <TileLayer url={light_url} zIndex={2} />
          </BaseLayer>
          <BaseLayer name="Mapbox Dark">
            <TileLayer url={dark_url} zIndex={3} />
          </BaseLayer>
        </LayersControl>
        <TileLayer url={selectable_layer_url} zIndex={10} />
      </Map>
    </div>
  );
};

export default SimpleMap;
