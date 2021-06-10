const express = require('express');
const path = require('path');

const PORT = process.env || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});