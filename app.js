const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const port = 80;
const bodyparser = require("body-parser")
const mongoose = require('mongoose');


main().catch(err => console.error(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/paymentsIcecream');
  console.log('Connected to the database');
}


const paymentSchema = new mongoose.Schema({
  name: String, 
  email: String,
  phone: String, 
  location: String
});


const Payment = mongoose.model('Payment', paymentSchema);

// EPRESS  
app.use('/static', express.static('static'));
app.use(express.urlencoded());

// PUG
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// ENDPOINTS
app.get('/', (req, res)=>{
    const content = 'This is the best icecream'
    const params = {'title': 'Scoopful Delights', 'content': content}
    res.status(200).render('index.pug', params)
})

app.get('/about', (req, res)=>{
    res.status(200).render('about.pug')
})

app.get('/menu', (req, res)=>{
    res.status(200).render('menu.pug')
})

app.get('/order', (req, res)=>{
    res.status(200).render('order.pug')
})

app.post('/order', (req, res)=>{

    var myData = new Payment(req.body)


    myData.save().then(()=>{
        res.send("This item has been saved to db")
    }).catch(()=>{
        res.status(400).send('Item was not saved in db')
    })

})

// LISTEN
const url = `http://localhost:${port}`;
app.listen(port, () => console.log(`App is running on ${url}`));
