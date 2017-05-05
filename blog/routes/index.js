var express = require("express");
var router = express.Router();

var blogmodel = require("../model/blogmodel").default;

router.get('/', function(req, res, next){

    Promise.all([
        blogmodel.get_blog_config(),
        blogmodel.get_articles()
    ]).then(([configs,articles])=>{
        if(configs.length==0){
            return next();
        }
        var {site_name,site_title,site_subtitle}
        = configs[0];
        
        res.render('index', { 
             title: 'Express', 
             site_name, 
             site_title, 
             site_subtitle
        });
    })
});


router.get('/add', function(req, res, next){

});

router.get('/view/:id', function(req,res,next){

});
router.get('/adding',function(req,res,next){
    var {title,author,content} = req.body;
    blogmodel.insert_article({
        title,author,content,
        ctime:new Date(),
        mtime:new Date()
    }).then(()=>{
        res.send("新增完成");
    });
});

module.exports = router;