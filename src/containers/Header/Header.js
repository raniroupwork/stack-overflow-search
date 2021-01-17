// Modules
import React, { useState } from 'react';

// Styles
import './Header.sass';

// Components
import HistoryMoral from '../../components/HistoryModal/HistoryModal.js'


// Icons
import { ReactComponent as StackOverflowIcon } from '../../images/Stack_Overflow_icon .svg';

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    const [auth, setAuth] = useState(true);

    return (
        <header className="Header">
            <div className={"Header__logo"}>
                <StackOverflowIcon className="Header__logo-icon"></StackOverflowIcon>
                <p className="Header__logo-title">stack <span>overflowGet</span></p>
            </div>
            <div className={"Header__menu"}>
                <div className="Header__menu-user-text">
                    <p>User Name</p>
                </div>
                <div className="Header__menu-content">

                </div>
            </div>
            {/* <HistoryMoral></HistoryMoral> */}
        </header>
    );
};

export default Header;
