const express= require('express')
//const { $where } = require('./../models/article')
const Article= require('./../models/article')
const router = express.Router()

router.get('/new',(req,res)=>{
    res.render('articles/new')
})

router.get('/:id',(req,res)=>{

})

router.post('/',async (req,res)=>{
  try {
    let article= new Article({
    title:req.body.title,
    description: req.body.description,
    markdown: req.body.markdown
  })
    
    article = await article.save()
    res.redirect(`/articles/${article.id}`)
   }
   catch(e){
      res.render('articles/new',{article: article})
   }
  
})


   module.exports = router