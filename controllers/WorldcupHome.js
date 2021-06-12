const Worldcup = require('../models/Worldcup.js')

module.exports = async (req, res) =>{
    const worldcups = await Worldcup.find({}).populate('userid')  
    //console.log(req.session)      
    res.render('worldcup',{
        worldcups
    });
}