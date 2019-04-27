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

  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }

  resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 200,
      headerEl = document.getElementById("menu");

    if (distanceY > shrinkOn) {
      headerEl.classList.add("smaller");
    } else {
      headerEl.classList.remove("smaller");
    }

    let burger = document.getElementById("burger");

    if (distanceY > shrinkOn) {
      burger.classList.add("visible");
    } else {
      burger.classList.remove("visible");
    }
  }

  change(picto) {
    this.state[picto] === '' ?
      this.setState({ [picto]: 'changed', openPortfolio: picto }) :
      this.setState({ [picto]: '' })
  };



  render() {

    return (
      <div>
        <div className='burger' id='burger'></div>
        <div className='burger-bar'></div>
        <div className='menu' id="menu">
          <div className='bbc'  >
            <hr className="line-1"></hr>
            <header className='bbc-type-1' >INFORM ,  EDUCATE AND ENTERTAIN</header>
            <header className='bbc-type-2'>ANNNND. HIRE DAVID PARKINSON</header>
            <hr className="line-2"></hr>
          </div>

          < section className='all-pictos' id="picto-box" >


            <div className="about-box height red" onClick={() => { this.change('about') }} >
              <About about={this.state.about} />
            </div>

            <div className="eye-box height green" onClick={() => { this.change('eye') }} >
              <Eye eye={this.state.eye} />
            </div>

            <div className="choirs-box height red" onClick={() => { this.change('choirs') }} >
              <Choirs eye={this.state.eye} />
            </div>

            <div className="english-box height red" onClick={() => { this.change('english') }} >
              <English english={this.state.english} />
            </div>

            <div className="jam-box height red" onClick={() => { this.change('jam') }} >
              <Jam jam={this.state.jam} />
            </div>

            <div className="ears-box height red" onClick={() => { this.change('ears') }} >
              <Ears ears={this.state.ears} />
            </div>

            <div className="free-box height red" onClick={() => { this.change('free') }} >
              <Free free={this.state.free} />
            </div>

            <div className="books-box height red" onClick={() => { this.change('books') }} >
              <Books books={this.state.books} />
            </div>

            <div className="gooey-box height red" onClick={() => { this.change('gooey') }} >
              <Gooey gooey={this.state.gooey} />
            </div>

            <div className="planets-box height red" onClick={() => { this.change('planets') }} >
              <Planets planets={this.state.planets} />
            </div>
          </section>
        </div>


        <Portfolio openWork={this.state.openPortfolio} />
      </div>
    );
  }
}

export default Pictograms