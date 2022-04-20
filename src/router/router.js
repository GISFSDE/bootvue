//引入vue
import Vue from 'vue';
//引入vue-router
import VueRouter from 'vue-router';
//第三方库需要use一下才能用
Vue.use(VueRouter)
//引用page1页面
import page1  from './page1.vue';
//引用page2页面
import page2  from './page2.vue';

//定义routes路由的集合，数组类型
const routes=[
    //单个路由均为对象类型，path代表的是路径，component代表组件
    {path:'/page1',component:page1},
    {path:"/page2",component:page2},
    // 第一次进去是看不到路由页面的，这是因为我们没有设置默认值，我们首次进入的时候路径是为空的，那么我们可以这么解决：
    //可以配置重定向
    {path:'',redirect:"page1"}
    //或者重新写个路径为空的路由
    // {path:"",component:page1}
    // 用重定向和单独配置路由的区别：
// 　　重定向实际上是当匹配到路径符合条件的时候去执行对应的路由，当然这个时候的url上面的地址显示的是对应的路由，页面也是对应的路由页面；
// 　　重新配置路由是当匹配到路径符合条件的时候，router-view页面展示部分负责拿符合条件路由的页面来展示，实际上url是没有发生变化的；
//使用冒号标记，当匹配到的时候，参数值会被设置到this.$route.params中
{path:"/user/:name",component:user}
]

//实例化VueRouter并将routes添加进去
const router=new VueRouter({
//ES6简写，等于routes：routes
    routes
});

//抛出这个这个实例对象方便外部读取以及访问
export default router