import React from "react";
import { PlusCircle } from "lucide-react";

import './FileUpload.scss';

const FileUpload = ({ files, setFiles }) => {
  const uploadHandler = () => {};

  return (
    <>
      <div className="file-card">
        <div className="file-inputs">
          <input type="file" />
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
