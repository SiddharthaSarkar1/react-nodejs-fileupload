const express = require("express");
const cors = require("cors");

const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
const upload = multer({ storage });

// const upload = multer({ dest: '/uploads' });

const PORT = 8080;

const app = express();

app.use(cors());

app.post("/upload", (req, res) => {
  setTimeout(() => {
    console.log("file uploaded");
    return res.status(200).json({ result: true, msg: "file uploaded" });
  }, 3000);
});

app.post("/api/upload", upload.single("file"), (req, res) => {
  res.json(req.file);
});

app.delete("/upload", (req, res) => {
  console.log(`File deleted`);
  return res.status(200).json({ result: true, msg: "file deleted" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
