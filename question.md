vue-cli3.x之mint-ui按需引入
1.npm install mint-ui -S
2.npm install babel-plugin-component -D
3.然后，将 babel.config.js修改为：
module.exports = {
  presets: ["@vue/app"],
  plugins:[
      [
        "component",
        {
          "libraryName": "mint-ui",
          "style": true
        }
      ]
  ]
};
4.如果你只希望引入部分组件，比如 Button 和 Cell，那么需要在 main.js 中写入以下内容：
import Vue from 'vue'
import { Button, Cell } from 'mint-ui'
import App from './App.vue'

Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
/* 或写为
 * Vue.use(Button)
 * Vue.use(Cell)
 */

new Vue({
  el: '#app',
  components: { App }
})