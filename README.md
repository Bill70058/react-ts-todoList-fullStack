### 简单的前后端项目
- 后端：node+mongodb
- 前端：react+ts+antd

#### mongodb相关
- mongodb cloud server地址
``https://cloud.mongodb.com/v2/629ca0f617d6f437ad233366#clusters``

- 本地安装mongodb
``https://www.runoob.com/mongodb/mongodb-osx-install.html``

- mongodb一些操作
``https://www.runoob.com/nodejs/nodejs-mongodb.html``

- 链接远程数据库软件
``https://nosqlbooster.com/downloads``

- 图文教程
``https://segmentfault.com/a/1190000021364651``

- mogoose文档
``http://www.mongoosejs.net/docs/api.html``

#### react文档
``https://zh-hans.reactjs.org/docs/create-a-new-react-app.html``

### 文件结构
- client：前端文件
- db：数据库表文件，导入数据库使用
- models：model层
- routes：路由文件
- utils：jwt封装， 返回信息模板
- server.js：后端启动文件

### 下载依赖
- 根目录运行``yarn install``，再进入client运行``yarn install``

### 启动
- 启动前端：进入client运行``npm run start``或者根目录运行``npm run client``
- 启动后端：根目录运行``npm run server``
- 启动前后端：根目录运行``npm run dev``