import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="content">
                <h1 className="title">Smart Quiz for Sharp Minds</h1>
                <p className="subtitle">Challenge yourself with the best quiz platform!</p>
                <button className="start-quiz-button">Start Quiz</button>
            </div>
        </div>
    );
};

export default Home;
