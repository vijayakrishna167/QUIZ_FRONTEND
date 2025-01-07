import React, { useState } from 'react';
import './sidebar.css';
import AdminQuestionForm from '../AdminQuestionForm'; // Assuming this is defined elsewhere
import StudentMarks from './StudentMarks'; // Importing the StudentMarks component
import Excel from './Excel';

const AdminPanel = () => {
  const [selectedPage, setSelectedPage] = useState('');

  // Function to render the selected page
  const renderPage = () => {
    switch (selectedPage) {
      case 'addQuestions':
        return <AdminQuestionForm />;
      case 'addQuestionsExcel':
        return <Excel/>;
      case 'studentMarks':
        return <StudentMarks />; // Using the imported StudentMarks component
      default:
        return <h2>Welcome to Admin Panel</h2>;
    }
  };

  return (
    <div className="admin-panel">
      <div className="sidebar">
        <button onClick={() => setSelectedPage('addQuestions')}>Add Questions</button>
        <button onClick={() => setSelectedPage('addQuestionsExcel')}>Add Questions with Excel</button>
        <button onClick={() => setSelectedPage('studentMarks')}>Student Marks</button>
      </div>
      <div className="content">
        {renderPage()}
      </div>
    </div>
  );
};

// Placeholder components for each page
const AddQuestions = () => <h2>Add Questions Page</h2>;
const AddQuestionsExcel = () => <h2>Add Questions with Excel Page</h2>;

export default AdminPanel;
