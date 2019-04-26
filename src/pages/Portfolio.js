import React, { Component } from 'react';

class Portfolio extends Component {

    state = {
        titles:{
            about:'Aboutfsdfdsfdsfdsfdsfsdafsf',
            eye: "MALE TEARS"
        }
    }

    render() {

        const {openWork}= this.props;

        return (

            <section className = "portfolio-box">
                <header>{this.state.titles[openWork]}</header>
            </section>
        );
    }
}

export default Portfolio;