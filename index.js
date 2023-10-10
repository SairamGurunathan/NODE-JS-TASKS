const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const PORT = 5000;
const dirPath = path.join(__dirname,'current-timestamp')

app.get('/',(req,res)=>{
    const date = new Date();
    const newDate = date.toUTCString().slice(0,-4);
    fs.writeFileSync(`${dirPath}/date-time.txt`,newDate);
    res.sendFile(`${dirPath}/date-time.txt`)
})



app.listen(PORT);