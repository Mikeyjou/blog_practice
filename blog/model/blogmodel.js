var config = require("../config").default;

var knex = require('knex')({
  client: 'pg',
  connection: {
      host : "127.0.0.1",
      user : config.db.username,
      password : config.db.password,
      database : config.db.database
  },
});

var build = (item) => item;

export default{
    get_blog_config(){
        return knex("blog")
        .select()
        .limit(1)
        .then(build);
    },
    get_articles(){
        return knex("articles")
        .select()
        .then(build);
    },
    insert_article(article){
        return kenx("articles")
        .insert(article)
        .then(build);
    }
};