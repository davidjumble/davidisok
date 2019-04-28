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

import ScrollToTop from "react-scroll-up"
class Pictograms extends Component {

  state = {
    pictos: {
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
    },

    pictoArray: ['about', 'eye', 'choirs', 'english', 'jam', 'ears', 'free', 'books', 'gooey', 'planetss']

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
    // this.state[picto] === '' ?
    //   this.setState({ [picto]: 'changed', openPortfolio: picto }) :
    //   this.setState({ [picto]: '' })

    console.log(this.state);
    let newPictos = {
      openPortfolio: picto
    };
    this.state.pictoArray.forEach(el => {
      el === picto ? (newPictos[el] = "changed") : (newPictos[el] = "");
    });
    this.setState({ pictos: newPictos });
  };



  render() {

    const scrollStyle = {
      position: 'fixed',
      top: '3px',
      left: '45%',
      right: '0%',
      cursor: 'pointer',
      transitionDuration: '0.2s',
      transitionTimingFunction: 'linear',
      transitionDelay: '0s',
      height: '100px',
      width: '300px'
    }


    return (




      <div>
        <div className='burger yellow' id='burger'>
          <ScrollToTop showUnder={0} style={scrollStyle}>
            <img className='burgerimage' src={require('./burgermenu.png')} />
            <span></span><span></span>
          </ScrollToTop>
        </div>
        <div className='burger-bar yellow'></div>
        <div className='menu yellow' id="menu">
          <div className='bbc'  >
            <hr className="line-1"></hr>
            <header className='bbc-type-1' >A NEAT SHRINKING BURGER MENU</header>
            <header className='bbc-type-2'>OF OBLONG PICTOGRAM CHOICES</header>
            <hr className="line-2"></hr>
          </div>

          < section className='all-pictos' id="picto-box" >


            <div className="red about-box height "

              style={{ borderColor: this.state.pictos.openPortfolio != 'about' ? 'black' : 'orange' }}


              onClick={() => { this.change('about') }} >
              <About about={this.state.pictos.about} />
            </div>

            <div className="red eye-box height"
              style={{ borderColor: this.state.pictos.openPortfolio != 'eye' ? 'black' : 'orange' }}
              onClick={() => { this.change('eye') }} >
              <Eye eye={this.state.pictos.eye} />
            </div>

            <div className="choirs-box height red" onClick={() => { this.change('choirs') }}
              style={{ borderColor: this.state.pictos.openPortfolio != 'choirs' ? 'black' : 'orange' }}
            >
              <Choirs eye={this.state.eye} />
            </div>

            <div className="english-box height red" onClick={() => { this.change('english') }}

              style={{ borderColor: this.state.pictos.openPortfolio != 'english' ? 'black' : 'orange' }}>
              <English english={this.state.english} />
            </div>

            <div className="jam-box height red" onClick={() => { this.change('jam') }}
              style={{ borderColor: this.state.pictos.openPortfolio != 'jam' ? 'black' : 'orange' }} >
              <Jam jam={this.state.jam} />
            </div>

            <div className="ears-box height red" onClick={() => { this.change('ears') }}
              style={{ borderColor: this.state.pictos.openPortfolio != 'ears' ? 'black' : 'orange' }}
            >
              <Ears ears={this.state.ears} />
            </div>

            <div className="free-box height red" onClick={() => { this.change('free') }}
              style={{ borderColor: this.state.pictos.openPortfolio != 'free' ? 'black' : 'orange' }}
            >
              <Free free={this.state.free} />
            </div>

            <div className="books-box height red" onClick={() => { this.change('books') }}

              style={{ borderColor: this.state.pictos.openPortfolio != 'books' ? 'black' : 'orange' }}>
              <Books books={this.state.books} />
            </div>

            <div className="gooey-box height red" onClick={() => { this.change('gooey') }}

              style={{ borderColor: this.state.pictos.openPortfolio != 'gooey' ? 'black' : 'orange' }}>
              <Gooey gooey={this.state.gooey} />
            </div>

            <div className="planets-box height red" onClick={() => { this.change('planets') }}
              style={{ borderColor: this.state.pictos.openPortfolio != 'planets' ? 'black' : 'orange' }}>
              <Planets planets={this.state.planets} />
            </div>
          </section>
        </div>


        <Portfolio openWork={this.state.pictos.openPortfolio} />
      </div >
    );
  }
}

export default Pictograms