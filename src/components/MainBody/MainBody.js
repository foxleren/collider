import React from 'react';
import './MainBody.css';
import Header from '../Header/Header'
import IntroPage from '../IntroPage/IntroPage'
import SliderPage from "../SliderPage/SliderPage";
import {Fade} from "react-awesome-reveal";

function MainBody() {
    return (<div className="MainBody"><Fade cascade={true}><Header/>
            <IntroPage/>
            <SliderPage/>
            {/*<DescriptionColumnPage/>*/}
            {/*<SuggesterPage/>*/}
            {/*<ContactsPage/>*/}
        </Fade></div>);
}

export default MainBody;
