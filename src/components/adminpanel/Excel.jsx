import React from 'react'
import { useState } from 'react';
import axios from 'axios';
const Excel = () => {
    const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert('Please select a file!');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:7000/add-excel', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('File uploaded successfully!');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Failed to upload file');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept=".xlsx" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
}

export default Excel
