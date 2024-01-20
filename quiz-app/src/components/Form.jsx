import React, { useState } from 'react';
import { quizData } from '../data';

export default function Form({
    setScore,
    score,
    currentQuiz,
    setCurrentQuiz,
}) {
    const [checkedValue, setCheckedValue] = useState('');

    const handleCheckBox = (e) => {
        setCheckedValue(e.target.value);
    };
    const handleSubmit = (e) => {
        if (checkedValue != '') {
            e.preventDefault();
            currentQuiz <= quizData.length - 1 &&
                setCurrentQuiz((prev) => prev + 1);
            checkedValue == quizData[currentQuiz].correct &&
                setScore((cur) => cur + 1);

            setCheckedValue('');
            unCheck();
        } else {
            alert('Please mark as checked one option');
        }
    };
    function unCheck() {
        const checkboxes = document.querySelectorAll('.radio');

        let checkedElem = Array.from(checkboxes).find(
            (checbox) => checbox.checked
        );
        checkedElem && (checkedElem.checked = false);
    }
    return (
        <>
            <form onSubmit={handleSubmit} className='container'>
                <h1 className='myquiz'>My quiz app</h1>
                <h2 className='question'>
                    {`Q${currentQuiz + 1}: 
                        ${quizData[currentQuiz].question}`}
                </h2>
                <ul className='quizContainer'>
                    <li>
                        <input
                            className='radio'
                            type='radio'
                            name='opt'
                            id='opt1'
                            onChange={handleCheckBox}
                            value={0}
                        />
                        <label htmlFor='opt1'>
                            {quizData[currentQuiz].answers[0]}{' '}
                        </label>
                    </li>
                    <li>
                        <input
                            className='radio'
                            type='radio'
                            name='opt'
                            id='opt2'
                            onChange={handleCheckBox}
                            value={1}
                        />
                        <label htmlFor='opt2'>
                            {quizData[currentQuiz].answers[1]}
                        </label>
                    </li>
                    <li>
                        <input
                            className='radio'
                            type='radio'
                            name='opt'
                            id='opt3'
                            onChange={handleCheckBox}
                            value={2}
                        />
                        <label htmlFor='opt3'>
                            {quizData[currentQuiz].answers[2]}
                        </label>
                    </li>
                    <li>
                        <input
                            className='radio'
                            type='radio'
                            name='opt'
                            id='opt4'
                            onChange={handleCheckBox}
                            value={3}
                        />
                        <label htmlFor='opt4'>
                            {quizData[currentQuiz].answers[3]}
                        </label>
                    </li>
                </ul>
                <button type='submit' className='submit'>
                    Submit
                </button>
            </form>
        </>
    );
}
