import { useState } from 'react';
import axiosInstance from '../utils/axiosInstance';
import {  useNavigate } from 'react-router-dom';

const AddImage = () => {
    const navigate =useNavigate()
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  // Handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setMessage('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('photo', file);

    try {
      const response = await axiosInstance.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage('Image uploaded successfully!');
      navigate("/get-image")
      console.log(response.data);
    } catch (error) {
      setMessage('Failed to upload image.');
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col   items-center mt-6">
      <h1 className="text-2xl font-bold mb-4">Add Image</h1>

      {/* Image upload form */}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="file"
          onChange={handleFileChange}
          className="border p-2 rounded-md"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Upload Image
        </button>
      </form>

      {/* Display message */}
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
};

export default AddImage;
