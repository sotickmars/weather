import React from 'react';
import { Link } from 'react-router-dom'

import './nav.module.scss';



const Nav: React.FC = () => {
    return (

        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/yandex-weather"> Yandex</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Nav;
