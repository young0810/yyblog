const bodyParser = require("body-parser");
//1.引入express模块
const express = require("express");
//2.创建app对象
const app = express();

const article = require("./api/article");
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
//在原有的基础上加上下面代码即可
app.use(bodyParser.json());

app.use("/api", article);

//定义服务启动端口
app.listen(3030, () => {
  console.log("app listening on port 3030.");
});
