const express = require('express');
const routesNews = require('./src/routes/news')



const app = express();
const port = 8181;

//Static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

//Templeting engine
app.set('views','./src/views')
app.set('view engine', 'ejs')

//Routes
app.use('/', routesNews)

//App running on port 8181
app.listen(port, ()=>{
    console.log(`App listening on port ${port}`)})


