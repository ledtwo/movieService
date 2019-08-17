var express = require('express');
var router = express.Router();
var movie = require('../models/movie');
var comment=require('../models/comment');

router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});


//获得所有的电影列表
router.get('/list', function (req, res, next) {
    movie.findAll(function (err, allMovie) {
        res.json({status: 0, message: '获取成功', data: allMovie})
    })
});

//获得下载地址并将更新+1
//用户下载只返回下载地址
router.post('/download', function (req, res, next) {
    if (!req.body.movie_id) {
        res.json({status: 1, message: "电影id传递失败"})
    }else{
        movie.findById(req.body.movie_id, function (err, supportMovie) {
            movie.update({_id: req.body.movie_id}, {movieNumDownload: supportMovie.movieNumDownload + 1}, function (err) {
                if (err) {
                    res.json({status: 1, message: "下载失败", data: err})
                }
                res.json({status: 0, message: '下载成功', data: supportMovie.movieDownload})
            })
        })
    }

});

//获取相关电影的详细信息
router.post('/detail', function (req, res, next) {
    if(req.body.id) {
        movie.findById(req.body.id,function (err, getMovie) {
            res.json({status: 0, message: '获取成功', data: getMovie})
        })
    }else{
        res.json({status:1,message:'获取失败'})
    }
});

//获取相关电影的评论
router.post('/comment', function (req, res, next) {
    if(req.body.id) {
        comment.findByMovieId(req.body.id, function (err, getComment) {
            res.json({status: 0, message: '获取成功', data:getComment})
        })

    }else{
        res.json({status:1,message:'获取失败'})
    }
});

//获取相关电影的点赞和下载数(更改后)
router.post('/showNumber', function (req, res, next) {
    if(req.body.id) {
        movie.findById(req.body.id,function (err, getMovie) {
            res.json({status: 0, message: '获取成功', data: {movieNumDownload: getMovie.movieNumDownload,movieNumSuppose:getMovie.movieNumSuppose}})
        })
    }else{
        res.json({status:1,message:'获取失败'})
    }
});

//获取主页电影推荐
router.post('/getIndexMovie', function (req, res, next) {
    if(req.body.id) {
        movie.find({movieMainPage:true}, function (err, allMovie) {
            res.json({status: 0, message: '获取成功', data:allMovie})
        })
    }else{
        res.json({status:1,message:'获取失败'})
    }
});

//获取一个电影的评论
router.post('/getMovieComment', function (req, res, next) {
    if(req.body.id) {
        comment.findByMovieId(req.body.id, function (err, allComment) {
            res.json({status: 0, message: '获取成功', data:allComment})
        })
    }else{
        res.json({status:1,message:'获取失败'})
    }
});


//点赞的电影
router.post('/support', function (req, res, next) {
    if(req.body.id) {
        movie.findById(req.body.id, function (err, getMovie) {
            movie.update({_id: req.body.id}, {movieNumSuppose: getMovie.movieNumSuppose+1}, function (err, movieUpdate) {
                if (err) {
                    res.json({status: 1, message: "点赞错误", data: err})
                }
                res.json({status: 0, message: '点赞成功', data: movieUpdate})
            })
        })
    }else{
        res.json({status:1,message:'获取失败'})
    }
});

module.exports = router;
