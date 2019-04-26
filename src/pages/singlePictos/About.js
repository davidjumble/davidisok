import React from 'react';

const About = (props) => {
  return (
    <div>
      <img style={{ opacity: props.about === '' ? '1' : '0' }} className='-id-card' src={require('../../images/idcard.png')} />
      <img className='changed-id-card' src={require('../../images/idcardyellow.png')} />
    </div>
  );
};

export default About;