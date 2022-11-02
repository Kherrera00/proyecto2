const express = require('express');
const router = require('./router');
const app = express();
app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', require('./router'));

router.get('/edit', (req, res) => {

    res.render('edit')
});

router.get('/create', (req, res) => {

    res.render('create')
});

app.listen(3000, ()=>{
    console.log('SERVER corriendo en http://localhost:3000');
});