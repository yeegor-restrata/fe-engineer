import { FC } from "react";
import { Map } from "react-map-gl";

const BigMap: FC = () => {
  return (
    <Map
      mapboxAccessToken={ process.env.REACT_APP_MAPBOX_TOKEN }
      mapStyle="mapbox://styles/mapbox/streets-v12"
    >
      {/* TODO */}
    </Map>
  );
};

export default BigMap;