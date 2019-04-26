import React, { Component } from 'react';
import Eye from "./singlePictos/Eye.js"
import About from "./singlePictos/About.js"
import Choirs from "./singlePictos/Choirs.js"
import English from "./singlePictos/English.js"
import Jam from "./singlePictos/Jam.js"
import Ears from "./singlePictos/Ears.js"
import Free from "./singlePictos/Free.js"
import Books from "./singlePictos/Books.js"
import Gooey from "./singlePictos/Gooey.js"
import Planets from "./singlePictos/Planets.js"
import Portfolio from "./Portfolio"
class Pictograms extends Component {

  state = {
    about: '',
    eye: '',
    choirs: '',
    english: '',
    jam: '',

    ears: '',
    free: '',
    books: '',
    gooey: '',
    planets: '',
    openPortfolio: '',

  }

  change(picto) {
    this.state[picto] === '' ?
      this.setState({ [picto]: 'changed', openPortfolio: picto }) :
      this.setState({ [picto]: '' })
  };



  render() {

    return (
      <div>

        < section className='all-pictos' >

          <div className="about-box height" onClick={() => { this.change('about') }} >
            <About about={this.state.about} />
          </div>

          <div className="eye-box height" onClick={() => { this.change('eye') }} >
            <Eye eye={this.state.eye} />
          </div>

          <div className="choirs-box height" onClick={() => { this.change('choirs') }} >
            <Choirs eye={this.state.eye} />
          </div>

          <div className="english-box height" onClick={() => { this.change('english') }} >
            <English english={this.state.english} />
          </div>

          <div className="jam-box height" onClick={() => { this.change('jam') }} >
            <Jam jam={this.state.jam} />
          </div>

          <div className="ears-box height" onClick={() => { this.change('ears') }} >
            <Ears ears={this.state.ears} />
          </div>

          <div className="free-box height" onClick={() => { this.change('free') }} >
            <Free free={this.state.free} />
          </div>

          <div className="books-box height" onClick={() => { this.change('books') }} >
            <Books books={this.state.books} />
          </div>

          <div className="gooey-box height" onClick={() => { this.change('gooey') }} >
            <Gooey gooey={this.state.gooey} />
          </div>

          <div className="planets-box height" onClick={() => { this.change('planets') }} >
            <Planets planets={this.state.planets} />
          </div>





        </section>
        <Portfolio openWork={this.state.openPortfolio} />
      </div>
    );
  }
}

export default Pictograms