# movieService【电影网站】服务端
基于node.js的express搭建的电影网站后台服务器，数据库为MongoDB，具有用户登录、注册、权限管理、专栏文章、点赞、电影推荐及增删改查管理的完整功能
注：本项目为node开发的基础部分，故将其中的判断条件都一一简化，只是判断字段名是否存在，如果想要更特殊的解析，可以自行添加

## 一、使用步骤

 1. 将本项目clone到本地
 2. 执行命令 npm init
 3. 启动项目 node bin/www
 4. 服务端启动成功后，访问本地 http://localhost:3000 查看效果

## 二、详细功能

***在这里枚举下服务端提供的请求url路径 注意前缀为http://localhost:3000***

以下皆为POST请求：

***关于用户的数据集合处理***
 - 用户注册： http://localhost:3000/users/register
 - 用户登录： http://localhost:3000/users/login
 - 显示用户个人信息：http://localhost:3000/index/showUser
 - 提交评论： http://localhost:3000/users/postComment
 - 给电影点赞：  http://localhost:3000/users/support
 - 找回密码： http://localhost:3000/users/findPassword
 - 用户发送站内信: http://localhost:3000/users/sendEmail
 - 查看站内信：  http://localhost:3000/users/showEmail

***关于电影的数据集合的处理***

 - 获取相关电影评论：http://localhost:3000/movie/detail
 - 获取相关电影的点赞和下载数：http://localhost:3000/users/showNumber
 - 获取主页电影推荐： http://localhost:3000/users/GitIndexMovie

***后台管理***

 - 添加新的电影: http://localhost:3000/admin/movieAdd
 - 删除电影条目：http://localhost:3000/admin/movieDel
 - 修改电影信息：http://localhost:3000/admin/movieUpdate
 - 审核评论：http://localhost:3000/admin/checkComment
 - 删除评论：http://localhost:3000/admin/delComment
 - 封停用户：http://localhost:3000/admin/stopUser
 - 更改用户密码：http://localhost:3000/admin/changeUser
 - 显示所有用户：http://localhost:3000/admin/showUser
 - 用户权限管理：http://localhost:3000/admin/powerUpdate
 - 新增前台专栏文章：http://localhost:3000/admin/addArticle
 - 删除专栏文章：http://localhost:3000/admin/delArticle
 - 添加主页推荐：http://localhost:3000/admin/addRecommend

**以下皆为get请求**

 

 - 后台显示所有电影：http://localhost:3000/admin/movie
 - 后台显示所有评论：http://localhost:3000/admin/commentList
 - 前台获取电影列表：http://localhost:3000/movie/list
 - 显示所有排行榜：http://localhost:3000/index/showRanking
 - 显示文章列表：http://localhost:3000/index/showArticle
 -
![请求示意图](https://img-blog.csdnimg.cn/20190817085634433.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4Nzc0MDAx,size_16,color_FFFFFF,t_70)
**最后推荐使用goole应用商店的postman程序，方便验证url请求的结果。在发送post时，应当注意请求体都带有发送的规定的参数，譬如登录时，固定参数为username和password，在源码内注意甄别。**
点击下载源码【GitHub 仓库地址】
