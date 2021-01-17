// Modules
import React, { useState } from 'react';

// Styles
import './Header.sass';

// Components
import HistoryMoral from '../../components/HistoryModal/HistoryModal.js'
import { Dropdown } from 'semantic-ui-react'


// Icons
import { ReactComponent as StackOverflowIcon } from '../../images/Stack_Overflow_icon .svg';

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    const [auth, setAuth] = useState(true);

    const menuOptions = [
      {
        key: 'Search History',
        text: 'Search History',
        value: 'Search History',
      },
      {
        key: 'Logout',
        text: 'Logout',
        value: 'Logout',
      },
    ]

    return (
        <header className="Header">
            <div className={"Header__logo"}>
                <StackOverflowIcon className="Header__logo-icon"></StackOverflowIcon>
                <p className="Header__logo-title">stack <span>overflowGet</span></p>
            </div>
            <div className={"Header__menu"}>
                <div className="Header__menu-content">
                    <Dropdown
                        text='User Name'
                        icon='user'
                        floating
                        labeled
                        button
                        className='icon'
                        >
                        <Dropdown.Menu>
                            {menuOptions.map((option) => (
                            <Dropdown.Item key={option.value} {...option} />
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            {/* <HistoryMoral></HistoryMoral> */}
        </header>
    );
};

export default Header;
