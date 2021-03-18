1、随随便便就设置z-index 101 1000的，真的合适吗  
2、消息、动态、收藏、个人中心 为什么这个模块里面，会出现span标签包裹div标签，这河里吗  
3、找到了这个get请求，姑且记录一下[https://www.bilibili.com/index/recommend.json]  
4、[https://api.bilibili.com/x/web-interface/dynamic/region?ps=12&rid=181]  
5、primaryChannelMenu块级元素里，关于导航栏的分类-hover-下拉菜单部分，可以用css的方法来实现。（但是根据我的想法，如果多次下拉菜单，导致元素在多次display:none & block变化，应该会导致浏览器页面多次重排，影响性能。【注： visibility:hidden 只会引起重绘，可以暂时列入可优化选项】）  
