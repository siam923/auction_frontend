import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingComponent = () => (
  <div>
    <h2>
      <Skeleton />
    </h2>
    <p>
      <Skeleton count={3} />
    </p>
  </div>
);

export default LoadingComponent;
