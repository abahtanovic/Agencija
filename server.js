const express = require('express');
const app = express();


app.use(express.static('agencija/public'));


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server pokrenut na portu 3000');
});
