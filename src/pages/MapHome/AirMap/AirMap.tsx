import * as React from "react";
import { Memo } from "utils/declare";
import { IAirMapProps } from "../map-home.d";

import CommonMap from "../CommonMap/CommonMap";

import "./AirMap.less";

function AirMap(props: IAirMapProps): JSX.Element {

  return (
    <div className="AirMap-container">
      <CommonMap domId={"CommonMap-container-air"}/>
    </div>
  )
}

export default Memo(AirMap);
