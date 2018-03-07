const express = require('express');

const app = express();

app.use('/biz/:bizId', express.static(__dirname + '/public'));

app.listen(9000, () => console.log('listening on port 9000'));
