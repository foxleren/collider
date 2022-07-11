import React from 'react';
import './Header.css'
import {Fade} from "react-awesome-reveal";

import {GoTop} from "../../js/script";

function Header() {

    function toggleBurger(e) {
        e.target.classList.toggle('active')
        document.getElementById('header-links').classList.toggle('open')
    }

    return (
        <header>
            <div className="header-container">
                <div className="header-first-part">
                    <Fade triggerOnce={true} direction={"left"}>
                        <div className="logo" onClick={GoTop}/>
                    </Fade>
                    <div className="nav-toggle" onClick={(e) => toggleBurger(e)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <Fade cascade={true} triggerOnce={true} direction={"down"} duration={500}>
                    <ul id="header-links">
                        <li>
                            <a href={""}>О нас</a>
                        </li>
                        <li>
                            <a href={""}>Интерьер</a>
                        </li>
                        <li>
                            <a href={""}>Вместимость</a>
                        </li>
                        <li>
                            <a href={""}>Лекторий</a>
                        </li>
                        <li>
                            <a href={""}>Контакты</a>
                        </li>
                    </ul>
                </Fade>
            </div>

        </header>);
}

export default Header;