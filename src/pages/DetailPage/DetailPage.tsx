import * as React from "react";
import { Memo } from "utils/declare";
import { IProps } from "./detail-page.d";

import DetailContainer from "./DetailContainer/DetailContainer";

import backIcon from "assets/image/detail/nav-back.png";

import "./DetailPage.less";


const defaultProps: IProps = {
  title: "黑臭水体详情",
  tips: "数据来源  全国城市黑臭水体发布平台"
}


function DetailPage(propsIn: IProps): JSX.Element {
  const props: IProps = { ...JSON.parse(JSON.stringify(defaultProps)), ...propsIn }
  
  const backClick = () => {
    // TODO: back func
  }

  return (
    <div className="DetailPage-container">
      <div className="detail-page-title" onClick={backClick}>
        <img src={backIcon} alt="" />
        <span>{ props.title || ""}</span>
      </div>
      <DetailContainer />
      { props.tips && <div className="detail-page-tips">{ props.tips }</div> }
    </div>
  )
}

export default Memo(DetailPage);
