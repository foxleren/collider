import React from 'react';
import './MainBody.css';
import Header from '../Header/Header'
import DescriptionColumnPage from "../DescriptionColumnPage/DescriptionColumnPage";
import IntroPage from "../IntroPage/IntroPage";
import ContactsPage from "../ContactsPage/ContactsPage";
import SuggesterPage from "../SuggesterPage/SuggesterPage";
import SliderPage from "../SliderPage/SliderPage";

function MainBody() {
    return (<div className="MainBody">
        <Header/>
        <IntroPage/>
        <SliderPage/>
        <DescriptionColumnPage/>
        <SuggesterPage/>
        <ContactsPage/>
    </div>);
}

export default MainBody;
