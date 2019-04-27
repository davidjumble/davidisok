import React, { Component } from 'react';

class Portfolio extends Component {

    state = {
        images: {
            eye: 'maleTears'
        },
        titles: {
            about: 'Aboutfsdfdsfdsfdsfdsfsdafsf',
            eye: "Male Tears"
        }
    }

    render() {

        const { openWork } = this.props;

        return (

            <section className="portfolio-box">
                <div style={{ height: '20px' }}></div>
                <hr className="blueline"></hr>
                <div className="project">Project</div>
                <hr className="blueline"></hr>
                <div className='project-name'>{this.state.titles[openWork]}</div>
                <img className={`${openWork}-image`} src={require(`../images/projectImages/${this.state.images.eye}.jpg`)} ></img>

            </section >
        );
    }
}

export default Portfolio;