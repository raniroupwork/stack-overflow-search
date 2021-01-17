// Modules
import React, { useState } from 'react';

// Styles
import '@szhsin/react-menu/dist/index.css';
import './Header.sass';

// Components
import { Menu, MenuItem, ControlledMenu } from '@szhsin/react-menu';
import Grid from '@material-ui/core/Grid';

// Icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { ReactComponent as StackOverflowIcon } from '../../images/Stack_Overflow_icon .svg';

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    const [auth, setAuthenticaion] = useState(true);

    return (
        <header className="Header">
            <nav>
                <Grid
                direction="row"
                justify="center"
                alignItems="center"
                container>
                    <Grid 
                    container
                    className="Header__logo-icon">
                        <StackOverflowIcon className="Header__svg"></StackOverflowIcon>
                        <p>stack <span>overflowGet</span></p>
                    </Grid>
                    {auth && (<Grid className="Header__menu-wrapper">
                        <div className="Header__menu">
                            <p className="Header__user-name">User Name</p>
                            <AccountCircleIcon 
                                className="Header__menu-icon"
                                onClick={() => setOpen(true)}>
                            </AccountCircleIcon>
                            <ControlledMenu className="Header__menu" isOpen={isOpen}
                                onClose={() => setOpen(false)}>
                                <MenuItem onClick={(e) => console.log(e)}>Search Historic</MenuItem>
                                <MenuItem>Logout</MenuItem>
                            </ControlledMenu>
                        </div>
                    </Grid>)}
                </Grid>
            </nav>
        </header>
    );
};

export default Header;
