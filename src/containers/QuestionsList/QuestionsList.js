// Modules
import React, { useEffect } from 'react';
// Styles
import './QuestionsList.sass';

// Components
import QuestionItem from '../../components/QuestionItem/QuestionItem.js'

const QuestionsList = () => {
    return (
        <section className="QuestionsList">
            <QuestionItem></QuestionItem>
            <QuestionItem></QuestionItem>
            <QuestionItem></QuestionItem>
            <QuestionItem></QuestionItem>
        </section>
    );
};

export default QuestionsList;
