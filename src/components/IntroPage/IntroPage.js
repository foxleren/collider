import React from 'react';
import './IntroPage.css'

import GalaryImage from '../GalaryImage/GalaryImage'
import IntroInfo from "../IntroInfo/IntroInfo";
import IntroTitle from "../IntroTitle/IntroTitle";

function IntroPage() {
    return (
        <div className="IntroPage-container">
            <GalaryImage link={"/images/intro.svg"} extraClassName=""/>
            <IntroInfo/>
            <IntroTitle/>
        </div>

    );
}

export default IntroPage;