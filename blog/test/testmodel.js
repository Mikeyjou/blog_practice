var blogmodel = require("../model/blogmodel").default;
// blogmodel.get_blog_config().then((configs) =>{
//     console.log(configs);
// });
blogmodel.insert_article({
    title:"Test_articles",
    author:"Mikey",
    content:"Hello",
    ctime:new Date(),
    mtime:new Date()
}).then((item)=>{
    console.log(item);
})