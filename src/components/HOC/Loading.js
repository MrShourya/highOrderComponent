import React, { Component } from "react";
import "./Loading.css";
import FunctionalComponent from "../FunctionalComponent";
const isEmpty = prop =>
  prop === null ||
  prop === undefined ||
  (prop.hasOwnProperty("length") && prop.length === 0) ||
  (prop.constructor === Object && Object.keys(prop).length === 0);

const Loading = loadingProp => WrappedComponent => {
 class LoadingHOC extends Component {
    componentDidMount() {
      this.startTimer = Date.now();
    }

    componentWillUpdate(nextProps) {
      if (!isEmpty(nextProps[loadingProp])) {
        this.endTimer = Date.now();
      }
    }

    render() {
      const myProps = {
        loadingTime: ((this.endTimer - this.startTimer) / 1000).toFixed(2),
        name: "Shourya Mangal"
      };

      return isEmpty(this.props[loadingProp]) ? (
        <div className="loader" />
      ) : (
          <React.Fragment>
            <FunctionalComponent {...myProps}></FunctionalComponent>
            <WrappedComponent {...this.props} {...myProps} />
          </React.Fragment>
        );
    }
  };
  LoadingHOC.displayName = `WithSubscription(${getDisplayName(WrappedComponent)})`;
  return LoadingHOC;
};

function getDisplayName(WrappedComponent) {
  console.log(WrappedComponent.displayName , WrappedComponent.name); // WrappedComponent.name is the one that works here
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default Loading;
