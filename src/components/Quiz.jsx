import React, { useState, useEffect } from 'react';
import './Quiz.css';

const Quiz = ({ username }) => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/quiz/questions');
                const data = await response.json();
                setQuestions(data);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };
        fetchQuestions();
    }, []);

    useEffect(() => {
        if (showScore) {
            console.log('Submitting score:', { username, score }); // Log data before submitting
            if (!username || score === undefined) {
                console.error('Missing username or score, cannot submit.'); // Check for undefined values
                return;
            }
            const submitScore = async () => {
                try {
                    const response = await fetch('http://localhost:5000/api/user/submit-score', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ username, score }),
                    });
                    const data = await response.json();
                    if (!response.ok) {
                        throw new Error(data.message || 'Failed to submit score');
                    }
                    console.log('Score submitted successfully:', data);
                } catch (error) {
                    console.error('Error submitting score:', error.message);
                }
            };
            submitScore();
        }
    }, [showScore, username, score]);

    const handleAnswerClick = (isCorrect) => {
        if (isCorrect) {
            setScore((prevScore) => prevScore + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className="quiz-container">
            {showScore ? (
                <div className="score-section">
                    You scored {score} out of {questions.length}
                </div>
            ) : (
                questions.length > 0 && (
                    <>
                        <div className="question-section">
                            <div className="question-count">
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className="question-text">
                                {questions[currentQuestion].question}
                            </div>
                        </div>
                        <div className="answer-section">
                            {questions[currentQuestion].options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAnswerClick(option === questions[currentQuestion].correctAnswer)}
                                    className="answer-button"
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </>
                )
            )}
        </div>
    );
};

export default Quiz;
