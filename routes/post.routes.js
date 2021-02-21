const express=require('express')
const router=express.Router()
//model
const PostModel=require('../models/Post')
//find data from database
router.get('/', (req, res) => {
  PostModel.find()
                  .then((resultData)=>{res.json(resultData)})
                  .catch((error)=>{res.json(error)})
  })
  // filter
  router.get('/search', (req, res) => {
    PostModel.find({isActive:false},'title isActive')
                    .then((resultData)=>{res.json(resultData)})
                    .catch((error)=>{res.json(error)})
    })
    router.get('/searchBy', (req, res) => {
      PostModel.findOne({isActive:false},'title isActive')
                      .then((resultData)=>{res.json(resultData)})
                      .catch((error)=>{res.json(error)})
      })
      router.get('/searchById', (req, res) => {
        PostModel.findById('6032ca4a195c003c384bd199','title')
                        .then((resultData)=>{res.json(resultData)})
                        .catch((error)=>{res.json(error)})
        })
router.post('/', function (req, res) {
      const myPostModel= new PostModel({
            title:'my new title',
            subTitle:"Sub title",
            // createdDated:Date.now(),
            isActive:false,
            meta:{votes:54,favs:105},
  comments:[{message:'good job'},{message:'very bad'}]
})
myPostModel.save((err,data)=>{
  if(err)res.json(err)
  res.json(data)
})
})
module.exports=router