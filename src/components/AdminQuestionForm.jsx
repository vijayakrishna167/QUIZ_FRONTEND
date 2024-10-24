import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './AdminQuestionForm.css';


const AdminQuestionForm = () => {
    const [questionData, setQuestionData] = useState({
        question: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        correctAnswer: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setQuestionData({
            ...questionData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/admin/add-question', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(questionData),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success('Question added successfully!');
                setQuestionData({
                    question: '',
                    option1: '',
                    option2: '',
                    option3: '',
                    option4: '',
                    correctAnswer: ''
                });
            } else {
                toast.error(`Error: ${data.message}`);
            }
        } catch (error) {
            toast.error('Error adding the question.');
            console.error(error);
        }
    };

    return (
        <div className="question-form-page">
            <h2>Add New Quiz Question</h2>
            <form className="question-form" onSubmit={handleSubmit}>
                <input
                className='input-field'
                    type="text"
                    name="question"
                    placeholder="Enter your question"
                    value={questionData.question}
                    onChange={handleChange}
                    required
                />
                <input
                className='input-field'
                    type="text"
                    name="option1"
                    placeholder="Option 1"
                    value={questionData.option1}
                    onChange={handleChange}
                    required
                />
                <input
                className='input-field'
                    type="text"
                    name="option2"
                    placeholder="Option 2"
                    value={questionData.option2}
                    onChange={handleChange}
                    required
                />
                <input
                className='input-field'
                    type="text"
                    name="option3"
                    placeholder="Option 3"
                    value={questionData.option3}
                    onChange={handleChange}
                    required
                />
                <input
                className='input-field'
                    type="text"
                    name="option4"
                    placeholder="Option 4"
                    value={questionData.option4}
                    onChange={handleChange}
                    required
                />
                <input
                className='input-field'
                    type="text"
                    name="correctAnswer"
                    placeholder="Correct Answer"
                    value={questionData.correctAnswer}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className="submit-button">Add Question</button>
            </form>
        </div>
    );
};

export default AdminQuestionForm;
