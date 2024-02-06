import React from "react";
import { PlusCircle } from "lucide-react";
import axios from 'axios';

import './FileUpload.scss';

const FileUpload = ({ files, setFiles, removeFile }) => {
  const uploadHandler = (event) => {
    const file = event.target.files[0];
    file.isUploading = true;
    setFiles([...files, file]);

    //Upload file
    const formData = new FormData();
    formData.append(
        file.name,
        file,
        file.name
    );

    axios.post("http://localhost:8080/upload", formData)
    .then((res) => {
        file.isUploading = false;
    setFiles([...files, file]);
    console.log(file)
    })
    .catch((err) => {
        console.log(err);
        removeFile(file.name)
    })

  };

  return (
    <>
      <div className="file-card">
        <div className="file-inputs">
          <input type="file" onChange={uploadHandler} />
          <button>
            <i>
              <PlusCircle />
            </i>
            Upload
          </button>
        </div>
        <p className="main">Supported Files</p>
        <p className="info">PDF, JPG, JPGE, PNG</p>
      </div>
    </>
  );
};

export default FileUpload;
