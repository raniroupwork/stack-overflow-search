// Modules
import React, { useEffect } from 'react';

// Styles
import './Header.sass';

// Components
import Grid from '@material-ui/core/Grid';
import { ReactComponent as StackOverflowIcon } from '../../images/Stack_Overflow_icon .svg';

const Header = () => {
    return (
        <header className="Header">
            <nav>
                <Grid
                direction="row"
                justify="center"
                alignItems="center"
                container>
                    <Grid 
                    direction="row"
                    justify="center"
                    alignItems="center"
                    container
                    className="Header__icon"
                    container spacing={2} >
                        <StackOverflowIcon className="Header__svg"></StackOverflowIcon>
                        <p>stack <span>overflowGet</span></p>
                    </Grid>
                    <Grid className="Header__menu" container spacing={10}>

                    </Grid>
                </Grid>
            </nav>
        </header>
    );
};

export default Header;
