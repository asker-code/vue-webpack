// index.js 项目入口文件 
const root = document.createElement('div');
root.setAttribute('id','app');
document.body.appendChild(root);
// 引入 Vue
import Vue from 'vue';
import App from './app.vue';


//引入全局样式表
import './assets/styles/commin.css';
import './assets/styles/test.stylus.styl';
import './assets/styles/global.scss';

//引入图片
import './assets/images/add.svg';


//将Vue根文件注入DOM节点 $mount手动挂载
new Vue({
    render: (h) => h(App)
}).$mount('#app')