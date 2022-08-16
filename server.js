const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// mongodb://localhost:27017 默认本地mongodb前缀域名，oob_user：自己创建的数据库名
const uri = "mongodb://localhost:27017/oob_user";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const routerList = [
  {
    url: '/api/login',
    router:  require('./routes/login')
  },
  {
    url: '/api/todo',
    router: require('./routes/todoList')
  },
  {
    url: '/api/*',
    router: require('./utils/authorization').verifyToken
  },
  {
    url: '/api/users',
    router: require('./routes/users')
  }
]
console.log('---------router list----------')
for (let item of routerList) {
  app.use(item.url, item.router)
  console.log(item.url)
}
console.log('---------------------------------')

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   if (err) throw err;
//   const dbo = client.db('runoob')
//   var myobj = { name: "菜鸟教程", url: "www.runoob" };
//   // dbo.collection("site").insertOne(myobj, function(err, res) {
//   //     if (err) throw err;
//   //     console.log("文档插入成功");
//   //     client.close();
//   // });
//   dbo.collection("site").find({}).toArray(function(err, result) { // 返回集合中所有数据
//     if (err) throw err;
//     console.log(result);
//     client.close();
// });
// const collection = client.db("test").collection("devices");
// perform actions on the collection object
// client.close();
// });

// const exercisesRouter = require('./routes/exercises');
// const usersRouter = require('./routes/users');

// app.use('/exercises', exercisesRouter);
// app.use('/users', usersRouter);
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
