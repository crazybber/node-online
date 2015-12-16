# ServerDemo_nodejs

目前主要的后端模块：
NodeJS：基于V8擎的服务端运行时环境。
express：网络请求和路由。
mongoose：数据库ODM框架类库。
socket.io：实现websocket协议下的消息推送。

前端：
socket.io-client.
angularJS

bin文件夹里的www模块，是服务端启动的入口，目前包含，web服务和消息推送服务。

bower_components 文件夹里，放的是，web前端框架相关的包，基于angularjs搭建简单的测试页面，可以用。

db文件夹，放数据库数据类型模型定义，以及数据库连接管理。

Doc就是一些文档。

node_modules 文件夹里，主要是 nodejs开发相关的用到的模块。

public文件夹里放，前端web页面用的资源文件，imge，css，js。

route文件是处理客户端请求的路由关系的，业务模块。

service是放具体的业务类型处理逻辑，目前里面只有messagecenter

view里面就是放了一些h5的页面和页面用的js文件。

