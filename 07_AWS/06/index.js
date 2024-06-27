const express = require('express');
const ip = require('ip');

const app = express();

const PORT = 4000;

app.use(express.json());

app.get('/', (req, res) => {
    const ipAddress = ip.address();
    res.send(ipAddress);
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
});
