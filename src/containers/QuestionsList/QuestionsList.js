// Modules
import React, { useEffect } from 'react';
import { connect } from 'react-redux'
// Styles
import './QuestionsList.sass';

// Components
import { Alert, AlertTitle } from '@material-ui/lab';
import QuestionItem from '../../components/QuestionItem/QuestionItem.js'
import CircularProgress from '@material-ui/core/CircularProgress';

const QuestionsList = (props) => {
    const {
        SOFReducer: {
            SOFResult: {
                data,
                isLoading,
                error,
            }
        }
    } = props

    useEffect(() => {
        console.log('DATA: ', data)
    }, [])

    return (
        <section className="QuestionsList">
            {(isLoading ? (
                <CircularProgress className="QuestionsList__loading"/>
            ) : (
                data.items && data.items.length ? data.items.map((item) => (
                    <QuestionItem key={item.question_id} data={item}></QuestionItem>
                )) : data.items && (<div className="QuestionsList__empty"><p>No results</p></div>)
            ))};
            {error ? (
                <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                    This is an error alert — <strong>{error}</strong>
                </Alert>) : <></>}
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        SOFReducer: state.SOFReducer,
    };
}

export default connect(mapStateToProps)(QuestionsList)
