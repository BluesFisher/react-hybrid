import * as React from "react";
import { Memo, MyTabs, IMyTabsItem } from "utils/declare";
import { IAirMapProps, IWaterMapProps } from "./map-home.d";

import AirMap from "./AirMap/AirMap";
import WaterMap from "./WaterMap/WaterMap";

import "./MapHome.less";

const TITLE_CITY = "深圳市";

const MAP_HOME_TAB: IMyTabsItem[] = [
  { title: "空气", sub: '1', component: (props: IAirMapProps = {}) => <AirMap {...props} /> },
  { title: "水质", sub: '2', component: (props: IWaterMapProps = {}) => <WaterMap {...props} /> },
];

function MapHome(): JSX.Element {

  const renderContent = (tab: IMyTabsItem) => <div className="map-home-content">
    {/* tslint:disable-next-line:no-null-keyword */}
    { tab.component ? tab.component() : null }
  </div>

  return (
    <div className="MapHome-container">
      <div className="map-home-title">{ TITLE_CITY }</div>
      <div className="map-home-tab">   
        <MyTabs tabs={MAP_HOME_TAB} swipeable={false} enderTab={(tab: IMyTabsItem) => <span>{tab.title}</span>}>
          { renderContent }
        </MyTabs>
      </div>
    </div>
  )
}

export default Memo(MapHome);
