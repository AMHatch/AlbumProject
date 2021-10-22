const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use(require('./routes/index'))
app.use(require('./routes/albums'))
app.use(require('./routes/about'))
app.use(require('./routes/contact'))




app.listen(PORT,() => {
    console.log(`Listening on ${PORT}`);
    
})  