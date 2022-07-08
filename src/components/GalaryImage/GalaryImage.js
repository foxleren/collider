import React from "react";
import './GalaryImage.css'

function GalaryImage(props) {
    return (
        <img src={props.link} className={"galary-image" + " " + props.extraClassName} alt=""/>
    );
}

export default GalaryImage;