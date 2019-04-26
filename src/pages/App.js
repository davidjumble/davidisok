import React, { Component } from "react";
import "../stylish/gooey.css";
import "../stylish/pictos.css"
import "../stylish/boxes.css"
import "../stylish/portfolio.css"



import Pictograms from "./pictograms";
class index extends Component {
  state = {

  };

  grow(bigElement) {
    console.log(this.state);
    let newSizes = {};
    this.state.elements.forEach(el => {
      el === bigElement ? (newSizes[el] = "big") : (newSizes[el] = "tiny");
    });
    this.setState({ sizeOf: newSizes, color: "coral", biggie: bigElement });
  }

  shrink() {
    let newSizes = {};
    this.state.elements.forEach(el => {
      newSizes[el] = "little";
    });
    this.setState({ sizeOf: newSizes, biggie: null });
  }

  render() {
    var blackNwhite = {
      webkitFilter: "grayscale(100%)"
    };
    return (
      <div className="big-box">

        {/* <SmallBlobs /> */}

        <Pictograms />


        {/* //////////COUNCILS////////////// */}

        {/* <section
          className={`${this.state.sizeOf.councils}-councils-box`}
          onMouseEnter={() => {
            this.grow("councils");
          }}
          onMouseLeave={() => {
            this.shrink("councils");
          }}
          style={movements.councils[this.state.biggie]}
        >
          <g
          // id="fade"
          >
            <svg
              viewBox="-3 -3 140 60"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path fill={this.state.color} stroke="teal" strokeWidth="4" />
            </svg>
          </g>
        </section> */}


      </div>
    );
  }
}

export default index;
