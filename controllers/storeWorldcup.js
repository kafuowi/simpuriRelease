const WorldcupPost = require('../models/Worldcup.js')
const path = require('path')

module.exports = (req,res)=>{ 
    var imageArr=[];
    //console.log(req.body);
    let image = req.files.image;  
    let candidateName = req.body
    for(var i=0;i<req.files.image.length;i++){
        imageArr.push('/img/' + image[i].name);
    }
    //console.log(req.files)
    for(var i=0;i<req.files.image.length;i++){
        
        image[i].mv(path.resolve(__dirname,'..','public/img',image[i].name),async (error)=>{
            
        })     
    }      
    WorldcupPost.create({
        ...req.body,
        image: imageArr,
        userid: req.session.userId,
    })
    res.redirect('/') 
}