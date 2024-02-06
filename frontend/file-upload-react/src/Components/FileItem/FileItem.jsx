import React from "react";
import { File, Loader, XCircle } from "lucide-react";

import "./FileItem.scss";

const FileItem = ({ file, deleteFile }) => {
  return (
    <>
      <li className="list-item" key={file.name}>
        <File />
        <p>{file.name}</p>
        <div className="actions">
            {file.isUploading && <Loader onClick={() => deleteFile(file.name)} /> }
            {!file.isUploading && <XCircle onClick={() => deleteFile(file.name)} /> }
        </div>
      </li>
    </>
  );
};

export default FileItem;
