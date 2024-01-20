import React from 'react';

export default function WinPage({ score, setCurrentQuiz, setScore }) {
    return (
        <div className='container'>
            <div className='reslut'>
                {score > 2 ? 'congrats 😊 You Win' : 'You Lose😪'}
            </div>
            <h2 className='score'>Your Score is : {score}</h2>
            <button
                className='submit'
                onClick={() => {
                    setCurrentQuiz(0);
                    setScore(0);
                }}>
                Restart
            </button>
        </div>
    );
}
