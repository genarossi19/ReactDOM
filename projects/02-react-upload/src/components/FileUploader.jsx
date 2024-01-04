import React, { useState } from 'react';
import { uploadFile } from '../firebase/config';
import '../App.css'
import './styles/FileUploader.css'

const FileUploader = () => {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await uploadFile(file);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='submit-input'>
        <p className='text'>Añadir Archivo</p>
      <input type="file"  className='input-file' onChange={(e) => setFile(e.target.files[0])} />
      </div>
      <button type="submit">Subir</button>
    </form>
  );
};

export default FileUploader;