// Modules
import React, { useEffect } from 'react';
import { connect } from 'react-redux'
// Styles
import './QuestionsList.sass';

// Components
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
                )) : data.items && (<p>No results</p>)
            ))}
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        SOFReducer: state.SOFReducer,
    };
}

export default connect(mapStateToProps)(QuestionsList)
