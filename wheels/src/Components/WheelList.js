import React, { Component } from "react";
import { NavigationButton } from "./NavigationButton";
import { WheelDisplay } from "./WheelDisplay";
import {
  allWheelList,
  leftButtonText,
  rightButtonText,
} from "../Constants/WheelConstant";
import "./../Css/WheelList.css";

export class WheelList extends Component {
  constructor(props) {
    super(props);
    this.onClickingWheel = this.onClickingWheel.bind(this);
    this.onNavigationButtonClick = this.onNavigationButtonClick.bind(this);
    this.state = {
      activeWheelIndex: 0,
      isPreviousBtnDisabled: true,
      isNextBtnDisabled: false,
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", () => {
      console.log("keydown: ", "keydown");
    });
  }

  onClickingWheel(index) {
    if (index !== this.state.activeWheelIndex) {
      this.setState({
        activeWheelIndex: index,
      });
    }
  }

  onNavigationButtonClick(type) {
    const { activeWheelIndex } = this.state;
    if (type === "Previous") {
      if (activeWheelIndex >= 1) {
        this.setState({
          activeWheelIndex: --activeWheelIndex,
        });
      }
    } else {
      if (activeWheelIndex <= allWheelList.length - 2)
        this.setState({
          activeWheelIndex: activeWheelIndex++,
        });
    }
  }

  getWheelList(wheels) {
    return wheels.map((wheelData, i) => {
      const { name, imgSrc, fWDType, metaInfo, index } = wheelData;
      const { activeWheelIndex } = this.state;
      return (
        <WheelDisplay
          name={name}
          index={index}
          imgSrc={imgSrc}
          fWDType={fWDType}
          metaInfo={metaInfo}
          className={
            i === activeWheelIndex
              ? "wheel-pic-info-parent-selected"
              : "wheel-pic-info-parent"
          }
          onWheelClick={this.onClickingWheel}
        />
      );
    });
  }

  render() {
    const { activeWheelIndex } = this.state;
    return (
      <div className="wheels-img-div">
        <NavigationButton
          buttonText={leftButtonText}
          isDisabled={activeWheelIndex === 0}
        />
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
        <NavigationButton
          buttonText={rightButtonText}
          isDisabled={activeWheelIndex === allWheelList.length - 1}
        />
      </div>
    );
  }
}
