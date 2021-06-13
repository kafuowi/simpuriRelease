const WorlcupPost = require('../models/Worldcup.js')
module.exports = async (req,res) =>{
    const worldcup =  await WorlcupPost.findById(req.params.id).populate('userid')
    // console.log(blogpost)
    //console.log(worldcup.image);
    res.render('worldcupPost',{
        worldcup
    })
}