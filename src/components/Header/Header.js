import React from 'react';
import './Header.css'
import {Fade} from "react-awesome-reveal";

function Header() {
    return (
        <Fade>
            <header>
                <Fade direction={"left"}>
                    <div className="logo"/>
                </Fade>
                <Fade cascade={true} direction={"down"}>
                    <ul>
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

            </header>
        </Fade>
        );
}

export default Header;