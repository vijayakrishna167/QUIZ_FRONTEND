import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentMarks.css'; // Importing the CSS file

const StudentMarks = () => {
  const [students, setStudents] = useState([]);

  const fetchStudentMarks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/student-marks');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching student marks:', error);
    }
  };

  useEffect(() => {
    fetchStudentMarks();
  }, []);

  return (
    <div className="student-marks-container">
      <h2>Student Marks</h2>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.username}</td>
              <td>{student.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentMarks;
