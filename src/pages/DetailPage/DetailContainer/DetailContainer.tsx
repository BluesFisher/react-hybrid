import * as React from "react";
import { Memo } from "utils/declare";
import { IProps } from "./detail-container.d";

import locationIcon from "assets/image/detail/location.png";

import "./DetailContainer.less";


const defaultProps: IProps = {
  isSubPage: false,
  title: "茅洲河（光明段）",
  location: "深圳-南山区",
  monitorInfo: {
    time: "2019/4/1  15:00",
    level: "IV类"
  },
  tableInfo: [
    { name: "所属流域", value: "茅洲河" },
    { name: "所属区域", value: "光明区" },
    { name: "考核目标", value: "V类" },
    { name: "考核类型", value: "国考" },
    { name: "跨界情况", value: "跨市" },
    { name: "入海情况", value: "入海" },
  ]
}

const MONITOR_LEVEL_COLOR = {
  "": "#57D3A2",
  "劣V类": "#ff5200",
  "V类": "#ff9f00",
  "IV类": "#F5DC3E",
  "III类": "#00e671",
  "II类": "#00cfff",
  "I类": "#0087ff",
}


function DetailContainer(propsIn: IProps): JSX.Element {
  const props: IProps = { ...JSON.parse(JSON.stringify(defaultProps)), ...propsIn }

  const preRender = () => {
    const { isSubPage, title, location, monitorInfo, tableInfo } = props;

    return (
      <div className="DetailContainer-container">
        { 
          title && <div className={`detail-container-title ${isSubPage ? "detail-container-title-sub" : ""}`}>
            { title }
          </div> 
        }
        { 
          location && <div className="detail-container-location">
            <img src={locationIcon} alt="" />
            <span>{ location }</span>
          </div> 
        }
        { 
          monitorInfo && <div className="detail-container-monitor">
            <div className="detail-container-monitor-content">
              最近监测：
              <span>{ monitorInfo.time || "" }</span>
            </div>
            <div className="detail-container-monitor-content">
              水质级别：
              <span className="monitor-content-level" style={{background: MONITOR_LEVEL_COLOR[monitorInfo.level || ""]}}>
                { monitorInfo.level || "" }
              </span>
            </div>
          </div> 
        }
        {
          tableInfo && <div className="detail-container-table">
            {
              tableInfo.map( item => <div className="detail-container-table-item" key={item.name || ""}>
                <span className="table-item-name">{`${item.name || ""}：`}</span>
                <span className="table-item-value">{`${item.value || ""}`}</span>
              </div>
              )
            }
          </div>
        }
        { props.children }
      </div>
    )
  }

  return preRender();
}

export default Memo(DetailContainer);
