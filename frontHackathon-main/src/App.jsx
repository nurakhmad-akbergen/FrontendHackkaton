import React, { useState } from "react";
import Header from "./components/header/Header";
import './style.sass';
import MainPage from "./components/mainPage/MainPage";
import CheckDocumentPage from "./components/checkDocument/CheckDocumentPage";
import axios from 'axios';
import CarsPage from "./components/carsPage/CarsPage";

function App() {
  const [access, setAccess] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);



  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      if (selectedFile) {
        const formData = new FormData();
        formData.append('documentImage', selectedFile);

        const response = await axios.post('http://localhost:5000/process_document', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        console.log(response.data);
      } else {
        console.error('No file selected');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <Header />
      <MainPage />
      <CheckDocumentPage setAccess={setAccess} />
      {
        access === true ? <CarsPage></CarsPage> : null
      }
      
    </div>
  );
}

export default App;
