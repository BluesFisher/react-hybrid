import * as React from "react";

import "./withLazyLoad.less";
import BaseSpin from './../BaseSpin/BaseSpin';

// function getDisplayName(component: React.ComponentType) {
//     return component.displayName || component.name || "Component"
// }

const withLazyLoad = (WrappedComponent: React.ComponentType<any>) => 
    class HOC extends React.Component {
        // private displayName = `HOC(${getDisplayName(WrappedComponent)})`;

        public render() {
            
            return (
                <React.Suspense fallback={<div ><BaseSpin /></div>} >
                    <WrappedComponent {...this.props} />
                </React.Suspense>
            )
        }
    }

export default withLazyLoad;