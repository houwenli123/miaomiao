vue-cli3.x֮mint-ui��������
1.npm install mint-ui -S
2.npm install babel-plugin-component -D
3.Ȼ�󣬽� babel.config.js�޸�Ϊ��
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
4.�����ֻϣ�����벿����������� Button �� Cell����ô��Ҫ�� main.js ��д���������ݣ�
import Vue from 'vue'
import { Button, Cell } from 'mint-ui'
import App from './App.vue'

Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
/* ��дΪ
 * Vue.use(Button)
 * Vue.use(Cell)
 */

new Vue({
  el: '#app',
  components: { App }
})