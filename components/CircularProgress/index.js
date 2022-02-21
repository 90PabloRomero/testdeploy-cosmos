import React from "react";

const CircularProgress = ({className}) => <div className={`loader ${className}`}>
  <img src="/loader.svg" alt="loader"/>
</div>;
export default CircularProgress;
CircularProgress.defaultProps = {
  className: ''
}
