import React from 'react';

const Eye = (props) => {
  return (
    <div>
      <section className='eye'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -8 384 437.34"><g ><ellipse cx="185" cy="178.5" rx="177" ry="170.5" style={{ fill: " rgb(221, 204, 248)" }} /><path d="M511,248c45.25,0,87.76,17,119.71,47.8C662.49,326.47,680,367.2,680,410.5s-17.51,84-49.29,114.7C598.76,556,556.25,573,511,573s-87.76-17-119.71-47.8C359.51,494.53,342,453.8,342,410.5s17.51-84,49.29-114.7C423.24,265,465.75,248,511,248m0-16c-102.17,0-185,79.92-185,178.5S408.83,589,511,589s185-79.92,185-178.5S613.17,232,511,232Z"
          transform="translate(-326 -232)" style={{ fill: "rgb(67, 113, 124)", strokeMiterlimit: 10, strokeWidth: "16px" }} /></g>  </svg>
      </section>

      <section className={`${props.eye}-pupil`} >
        <svg id="pupil" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 207 164"><ellipse cx="103.5" cy="82" rx="95.5" ry="74" fill="#4a6dff" /><path d="M510.5,262c24,0,46.52,7.3,63.25,20.56C589.39,295,598,311.09,598,328s-8.61,33.05-24.25,45.44C557,386.7,534.55,394,510.5,394s-46.52-7.3-63.25-20.56C431.61,361.05,423,344.91,423,328s8.61-33.05,24.25-45.44C464,269.3,486.45,262,510.5,262m0-16C453.34,246,407,282.71,407,328s46.34,82,103.5,82S614,373.29,614,328s-46.34-82-103.5-82Z" fill="#4a6dff" transform="translate(-407 -246)" /></svg>
      </section>

      <section className={`${props.eye}-tears`}>

        <svg id="tears" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350.27 174.19"><path d="M347.5,466.5s37-49,85.17-27.51c5.31,2.46,15.43,8.34,23.83,22.51,20.45-21.39,49.34-30,74.18-21.74,19.06,6.33,29.76,20.6,33.82,26.74,2.32-3.18,21-27.84,54.48-29.33,35-1.56,58.52,26.33,58.52,26.33,31,126-79.42,87.68-79.42,87.68C565,619,396,616,347.5,466.5Z" transform="translate(-339.72 -426.54)" opacity={props.eye === '' ? '0' : '1'} fill="#4a6dff" stroke="#000" stroke-miterlimit="10" stroke-width="14" /><path d="M819,445" transform="translate(-339.72 -426.54)" fill="#4a6dff" stroke="#000" stroke-miterlimit="10" stroke-width="14" /></svg>

      </section>
    </div>
  );
};

export default Eye;