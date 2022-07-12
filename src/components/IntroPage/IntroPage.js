import React from 'react';
import './IntroPage.css'

import GalaryImage from '../GalaryImage/GalaryImage'
import IntroInfo from "../IntroInfo/IntroInfo";
import IntroTitle from "../IntroTitle/IntroTitle";
import {Fade} from "react-awesome-reveal";

function IntroPage() {
    return (<div className="IntroPage-container">
            <Fade cascade={true} direction={"up"}>

                <GalaryImage link={"/images/intro.svg"} extraClassName="intro"/>
                <IntroInfo/>
                <IntroTitle/>
            </Fade>

        </div>

    );
}

export default IntroPage;