import * as React from "react";
import { Memo, IRouterProps } from "utils/declare";

import "./PageContainer.less";

function PageContainer(props: IRouterProps): JSX.Element {

  return (
    <div className="PageContainer-container animated fadeIn">
      { 
        props.children || <div className="error-page">Error Page</div>
      }
    </div>
  )
}

export default Memo(PageContainer);
