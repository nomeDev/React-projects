import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import { quizData } from './data';
import WinPage from './components/WinPage';

function App() {
    const [score, setScore] = useState(0);
    const [currentQuiz, setCurrentQuiz] = useState(0);

    return (
        <>
            <main>
                {currentQuiz < quizData.length ? (
                    <Form
                        currentQuiz={currentQuiz}
                        setCurrentQuiz={setCurrentQuiz}
                        score={score}
                        setScore={setScore}
                    />
                ) : (
                    <WinPage
                        score={score}
                        setCurrentQuiz={setCurrentQuiz}
                        setScore={setScore}
                    />
                )}
            </main>
        </>
    );
}

export default App;
