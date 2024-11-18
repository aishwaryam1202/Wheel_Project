import React, { Component } from "react";
import "./../Css/WheelList.css";
import { NavigationButton } from "./NavigationButton";
import { WheelDisplay } from "./WheelDisplay";
import {
  allWheelList,
  leftButtonText,
  rightButtonText,
} from "../Constants/WheelConstant";

export class WheelList extends Component {
  getWheelList(wheels) {
    return wheels.map((wheelData) => {
      const { name, imgSrc, fWDType, metaInfo } = wheelData;
      return (
        <WheelDisplay
          name={name}
          imgSrc={imgSrc}
          fWDType={fWDType}
          metaInfo={metaInfo}
          className={"wheel-pic-info-parent"}
        />
      );
    });
  }

  render() {
    return (
      <div className="wheels-img-div">
        <NavigationButton buttonText={leftButtonText} />
        {this.getWheelList(allWheelList)}
        {/* <div className="wheel-pic-info-parent-selected">
          <img src={wgu} alt="" />
          <div className="wheel-info-1">
            17-INCH CAST ALUMINUM WHEEL, FULLY PAINTED SILVER LITHO
          </div>
          <div className="wheel-info-2">Standard on Touring FWD</div>
          <div className="wheel-name">(WGU)</div>
        </div>
         */}
        <NavigationButton buttonText={rightButtonText} />
      </div>
    );
  }
}
