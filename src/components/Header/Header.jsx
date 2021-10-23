import { useState } from 'react';

// Import Style

import './header.scss';

// Import Logo

import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';

// Import Image

import InsureLogo from '../../assets/logo.svg';

const Header = () => {

    // States for Menu Open & Close

    const [ menuOpen, setMenuOpen ] = useState(false);

    return (
        <header className="header">

            <div className="header__content">

                <img src={InsureLogo} alt="company name" className="header__content__logo"/>

                    <nav className="header__content__nav">
                        <ul>
                            <li>
                                <a href="/">How We Work</a>
                            </li>
                            <li>
                                <a href="/">Blog</a>
                            </li>
                            <li>
                                <a href="/">Account</a>
                            </li>
                        </ul>
                        <button>View Plans</button>
                    </nav>

                    <div className="header__content__toggle">
                        <AiOutlineMenu/>
                    </div>

            </div>

        </header>
    );
};

export default Header;