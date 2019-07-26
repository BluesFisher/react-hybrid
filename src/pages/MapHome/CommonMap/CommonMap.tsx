import * as React from "react";
import { Memo, useEffect } from "utils/declare";
import { IProps } from "./common-map.d";

import "./CommonMap.less";

declare const T: any;

const defaultProps: IProps = {
  domId: "CommonMap-container"
}

const MAP_CENTER = [114.0528, 22.5455];
const MAP_ZOOM_DEFAULT = 11;
let map: any;

function CommonMap(propsIn: IProps): JSX.Element {
  const props: IProps = { ...JSON.parse(JSON.stringify(defaultProps)), ...propsIn }
  
  useEffect(() => {
    map = new T.Map(props.domId || "", {
      projection: "EPSG:4326",
    });
    map.centerAndZoom(new T.LngLat(MAP_CENTER[0], MAP_CENTER[1]), MAP_ZOOM_DEFAULT);
    map.enableInertia();
    getLocation();
  }, [])

  const getLocation = () => {
    const location = new T.LngLat(MAP_CENTER[0], MAP_CENTER[1]);
    map.centerAndZoom(location, MAP_ZOOM_DEFAULT);
    const marker = new T.Marker(location);
    map.addOverLay(marker);
  }

  return (
    <div className="CommonMap-container" id={props.domId || ""} />
  )
}

export default Memo(CommonMap);
