const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send('Server side Running')
})

app.listen(port, () => {
    console.log('Education Server running on port- ', port);
})