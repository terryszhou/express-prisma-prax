const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({message: 'alive'});
})

app.listen(PORT, () => {
    console.log(`Listening to Port ${PORT}`)
})