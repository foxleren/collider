import React from 'react';
import './MainBody.css';
import Header from '../Header/Header'
import IntroPage from '../IntroPage/IntroPage'
import SliderPage from "../SliderPage/SliderPage";
import DescriptionColumnPage from "../DescriptionColumnPage/DescriptionColumnPage";
import SuggesterPage from "../SuggesterPage/SuggesterPage";
import ContactsPage from '../ContactsPage/ContactsPage'

function MainBody() {
    return (<div className="MainBody">
            <Header/>
            <IntroPage/>
            <SliderPage/>
            {/*<DescriptionColumnPage/>*/}
            {/*<SuggesterPage/>*/}
            {/*<ContactsPage/>*/}
        </div>);
}

export default MainBody;
