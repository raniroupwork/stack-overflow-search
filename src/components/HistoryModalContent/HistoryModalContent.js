// Modules
import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

// Styles
import "./HistoryModalContent.sass"

// Components
import HistoryModalContentItem from "./HistoryModalContentItem/HistoryModalContentItem.js"
import { Modal } from 'semantic-ui-react'

const ModalContent = (props) => {
    const {
        historyReducer: {
            searchHistory
        }
    } = props;

    useEffect(() => {
        console.log(searchHistory);
    }, [])

    return (
    <>
        <Modal.Header>Search History</Modal.Header>
        <Modal.Content scrolling>
            {!searchHistory.data.length &&(
                <Modal.Description>
                    <h5>Your search history is empty</h5>
                </Modal.Description>
            )}
            <>
                {searchHistory.data.map((data, index) => (
                    <HistoryModalContentItem data={data} index={index} key={index}></HistoryModalContentItem>
                ))}
            </>
        </Modal.Content>
    </>
    )
}

const mapStateToProps = (state) => {
    return {
        historyReducer: state.historyReducer,
    };
}

export default connect(mapStateToProps)(ModalContent)