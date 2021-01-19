// Modules
import React, { useState } from 'react';

// Styles
import './Header.sass';

// Components
import HistoryModalContent from '../../components/HistoryModalContent/HistoryModalContent.js'
import { Button, Icon, Modal } from 'semantic-ui-react'
import { Dropdown } from 'semantic-ui-react'


// Icons
import { ReactComponent as StackOverflowIcon } from '../../images/Stack_Overflow_icon .svg';

const Header = () => {
    const [auth, setAuth] = useState(true);
    const [open, setOpen] = useState(false)

    return (
        <header className="Header">
            <div className={"Header__logo"}>
                <StackOverflowIcon className="Header__logo-icon"></StackOverflowIcon>
                <p className="Header__logo-title">stack <span>overflowGet</span></p>
            </div>
            {auth && (
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
                                <Modal
                                    open={open}
                                    size={"large"}
                                    onClose={() => setOpen(false)}
                                    onOpen={() => setOpen(true)}
                                    trigger={
                                        <Dropdown.Item
                                            key={'Search History'}
                                            text={'Search History'}
                                            value={'Search History'}/>
                                }>
                                    <HistoryModalContent></HistoryModalContent>
                                    <Modal.Actions>
                                    <Button onClick={() => setOpen(false)} primary>
                                        Cancel
                                    </Button>
                                    </Modal.Actions>
                                </Modal>

                                <Dropdown.Item
                                    text={'Logout'}
                                    value={'Logout'}
                                    key={'Logout'}
                                    // onClick={() => setAuth(false)}/>
                                    onClick={() => {alert('Logout...')}}/>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
