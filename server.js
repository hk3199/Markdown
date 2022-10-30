const express =require('express')
const mongoose= require('mongoose')
const articleRouter= require('./routes/articles')
const app= express()

const Article =require('./models/article')


mongoose.connect('mongodb://localhost/blog', {
  useNewUrlParser: true, useUnifiedTopology: true
})

app.set('view engine','ejs')

app.use(express.urlencoded({ extended:false}))

app.get('/',(req,res)=>{
   const articles =[{
      title: 'First blog',
      createdate: new Date(),
      description:'love spilled from heaven onto barren land of men but mine is still parched.'
   },
   {
   title: 'Second blog',
   createdate: new Date(),
   description:'sedond'
   }]
   res.render('articles/index', {articles: articles})  //want all of my articles in this index page
})

//added
app.use('/articles',articleRouter)
app.listen(8080)