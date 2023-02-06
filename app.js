const express=require('express');

const morgan=require('morgan');

const mongoose=require('mongoose');



const blogRoutes = require('./routes/blogRouters');

const app=express();

mongoose.set('strictQuery', false);

const dbURI = 'mongodb://akshay123:testing1234@ac-xl5qtwy-shard-00-00.zpboz8u.mongodb.net:27017,ac-xl5qtwy-shard-00-01.zpboz8u.mongodb.net:27017,ac-xl5qtwy-shard-00-02.zpboz8u.mongodb.net:27017/?ssl=true&replicaSet=atlas-d1bjbs-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect(dbURI,{useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=>app.listen(3000))
.catch((err)=>console.log(err));



app.set('view engine','ejs');


app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));

app.use(morgan('dev')); 




app.get('/',(req,res)=>{

res.redirect('/blogs');

});
app.get('/about',(req,res)=>{

  // res.send('<p>about page</p>');
  res.render('about',{title: 'About' });
  
  });

  app.use('/blogs',blogRoutes)
 
    app.use((req,res)=> {
      res.status(404).render('404',{title: '404' });

    })
