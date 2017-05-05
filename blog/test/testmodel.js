var blogmodel = require("../model/blogmodel").default;
blogmodel.get_blog_config().then((configs) =>{
    console.log(configs);
});