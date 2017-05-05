var express = require("express");
var router = express.Router();

var blogmodel = require("../model/blogmodel").default;

require.get('/', function(req, res, next){
    blogmodel.get_blog_config().then((configs)=>{
        if(configs.length==0){
            return next();
        }
        var {site_name,site_title,site_subtitle}
        = configs[0];

         res.render('index', { title: 'Express' });
    });
});

module.exports = router;