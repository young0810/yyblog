//引入express模块
const express = require("express");
//定义路由级中间件
const router = express.Router();
//引入数据模型模块
const Article = require("../../models/article");

// 查询所有文章信息路由
router.get("/article", (req, res) => {
  console.log("hello");
  Article.find({})
    .sort({ update_at: -1 })
    .then(articles => {
      res.json(articles);
    })
    .catch(err => {
      console.log(2);
      res.json(err);
    });
});

// 通过ObjectId查询单个文章信息路由
router.get("/article/:id", (req, res) => {
  Article.findById(req.params.id)
    .then(article => {
      res.json(article);
    })
    .catch(err => {
      res.json(err);
    });
});

// 添加一篇文章信息路由
router.post("/article", (req, res) => {
  //使用Article model上的create方法储存数据
  console.log(req.body);
  Article.create(req.body, (err, article) => {
    if (err) {
      res.json(err);
    } else {
      res.json(article);
    }
  });
});

//更新一篇文章信息数据路由
router.put("/article/:id", (req, res) => {
  Article.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {}
    },
    {
      new: true
    }
  )
    .then(article => res.json(article))
    .catch(err => res.json(err));
});

//删除一篇文章信息路由
router.delete("/article/:id", (req, res) => {
  Article.findOneAndRemove({
    _id: req.params.id
  })
    .then(article => res.send(`${article.title}删除成功`))
    .catch(err => res.json(err));
});

module.exports = router;
