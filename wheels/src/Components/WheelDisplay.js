import React from "react";
import "./../Css/WheelDisplay.css";

export const WheelDisplay = (props) => {
  const { imgSrc, metaInfo, fWDType, name, className } = props;
  return (
    <div className={className}>
      <img src={imgSrc} alt={name} />
      <div className="wheel-info-1">{metaInfo}</div>
      <div className="wheel-info-2">{fWDType}</div>
      <div className="wheel-name">{name}</div>
    </div>
  );
};
