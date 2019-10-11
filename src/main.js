import Vue from 'vue'
import { Button, Header, Navbar, TabItem, Search } from 'mint-ui'
import muiCss from './assets/js/mui.js'
//import Test from './components/test'
import CitySelect from './components/CitySelect'
import mui from './assets/css/mui.min.css'
import App from './App.vue'
import router from './routers'
import store from './stores'

Vue.config.productionTip = false
Vue.component(Button.name, Button);
Vue.component(Header.name, Header);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Search.name, Search);
// Vue.use(Test)
Vue.use(CitySelect)
Vue.prototype.mui = mui

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')