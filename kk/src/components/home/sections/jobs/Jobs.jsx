import React from "react";
import "./Jobs.css";
import cemetery from "../../../../images/jobs/cemetery.png";
import cemeteryGrayscale from "../../../../images/jobs/cemetery-grayscale.png";

export default ({ image, grayImage }) => (
  <div className="jobs">
    {/* <div className='job-header'>
                <div className='job-header-image' style={{ backgroundImage: `url(${props.image})` }}></div>
                <div className='job-header-info'>
                    <h3>{props.titulo}</h3>
                </div>
            </div> */}
    <div
      className="colorido"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
    <div
      className="preto-e-branco"
      style={{ backgroundImage: `url(${grayImage ?? image})` }}
    ></div>
  </div>
);
