import { useState } from "react";
import "./App.scss";
import FileUpload from "./Components/FileUpload/FileUpload";
import FileList from "./Components/FileList/FileList";

function App() {
  const [files, setFiles] = useState([{
    name: 'myfileOne.pdf'
  }]);

  const removeFile = (filename) => {
    setFiles(files.filter(file => file.name !== filename));
  }
  
  console.log(files);
  return (
    <div className="App">
      <p className="title">Upload file</p>

      <FileUpload files={files} setFiles={setFiles} removeFile={removeFile} />
      <FileList files={files} removeFile={removeFile} /> 

    </div>
  );
}

export default App;
