const express = require('express');
const cors = require('cors');

const PORT = 8080;


const app = express();

app.use(cors());

// All the below API's are fake 

app.post("/upload", (req, res) => {
    
    setTimeout(() => {
        console.log('file uploaded')
        return res.status(200).json({ result: true, msg: 'file uploaded' });
    }, 3000);
});

app.delete("/upload", (req, res) => {
    console.log(`File deleted`)
    return res.status(200).json({ result: true, msg: 'file deleted' });
});


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})