import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

let app = express();
const PORT = 2992;

app.use(express.static(path.join(__dirname, '../../client/dist')));
app.use('/video', express.static(path.join(__dirname, '../static')));
app.use('/icon', express.static(path.join(__dirname, '../../client')));
app.use(bodyParser.json({
    type: 'application/json'
}));
app.use(bodyParser.urlencoded({
    type: 'application/x-www-form-urlencoded',
    extended: true
}));

app.get(/\/[0-9a-zA-Z\/]*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../../client', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}.....`);
})