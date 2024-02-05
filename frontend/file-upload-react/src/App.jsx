import { useState } from "react";
import "./App.scss";
import FileUpload from "./Components/FileUpload/FileUpload";

function App() {
  const [files, setFiles] = useState([]);

  return (
    <div className="App">
      <p className="title">Upload file</p>

      <FileUpload files={files} setFiles={setFiles} />

    </div>
  );
}

export default App;
