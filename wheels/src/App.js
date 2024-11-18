import "./App.css";
import wgu from "./Assets/wgu.png";
import wjr from "./Assets/wp6.png";
import wp6 from "./Assets/wpf.png";

function App() {
  const leftButtonText = "<";
  const rightButtonText = ">";
  return (
    <div className="App">
      <header className="App-header">
        <div className="background-div">
          <div className="wheels-text-div">
            <div className="wheel-title-div">WHEELS</div>
            <div className="wheel-text-div">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </div>
          </div>
          <div className="wheels-img-div">
            <div className="Button-div">{leftButtonText}</div>
            <div className="wheel-pic-info-parent">
              <img src={wgu} alt="" />
              <div className="wheel-info-1">
                17-INCH CAST ALUMINUM WHEEL, FULLY PAINTED SILVER LITHO
              </div>
              <div className="wheel-info-2">Standard on Touring FWD</div>
              <div className="wheel-name">(WGU)</div>
            </div>
            <div className="wheel-pic-info-parent-selected">
              <img src={wjr} alt="" />
              <div className="wheel-info-1">
                17-INCH CAST ALUMINUM DIAMOND - CUT WHEEL WITH BALTIC GRAY
                POCKETS
              </div>
              <div className="wheel-info-2">
                Standard on Touring L FWD /Hybrid and Touring Hybrid
              </div>
              <div className="wheel-name">(WJR)</div>
            </div>
            <div className="wheel-pic-info-parent">
              <img src={wp6} alt="" />
              <div className="wheel-info-1">
                18- INCH CAST ALUMINUM WHEEL WITH FORESHADOW FINISH
              </div>
              <div className="wheel-info-2">
                Included with S Appearance Package on Touring Hybrid, Touring L
                Hybrid and Limited Hybrid
              </div>
              <div className="wheel-name">(WP6)</div>
            </div>
            <div className="Button-div">{rightButtonText}</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
