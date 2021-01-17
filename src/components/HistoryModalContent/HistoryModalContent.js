// Modules
import React, {useState} from 'react';

// Styles
import "./HistoryModalContent.sass"

// Components
import HistoryModalContentItem from "./HistoryModalContentItem/HistoryModalContentItem.js"
import { Modal } from 'semantic-ui-react'

const ModalContent = () => {
    const [historyData, setHistoryData] = useState([])

    return (
    <>
        <Modal.Header>Search History</Modal.Header>
        <Modal.Content scrolling>
            {/* {!historyData.length &&(
                <Modal.Description>
                <h5>Your history is empty</h5>
                </Modal.Description>
            )} */}
            <>
                <HistoryModalContentItem></HistoryModalContentItem>
            </>
        </Modal.Content>
    </>
    )
}

export default ModalContent