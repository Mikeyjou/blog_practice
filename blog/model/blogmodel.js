var config = require("../config");

var pg = require('knex')({
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
        return knex("blogs")
        .select()
        .limit(1)
        .then(build);
    }
};