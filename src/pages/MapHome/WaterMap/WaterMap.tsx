import * as React from "react";
import { Memo } from "utils/declare";
import { IWaterMapProps } from "../map-home.d";

import CommonMap from "../CommonMap/CommonMap";

import "./WaterMap.less";

function WaterMap(props: IWaterMapProps): JSX.Element {

  return (
    <div className="WaterMap-container">
      <CommonMap domId={"CommonMap-container-water"}/>
    </div>
  )
}

export default Memo(WaterMap);
