import Vue from 'vue'
import { Button, Header, Navbar, TabItem } from 'mint-ui'
import muiCss from './assets/js/mui.js'
//import Test from './components/test'
import CitySelect from './components/CitySelect'
import SearchBox from './components/SearchBox'
import mui from './assets/css/mui.min.css'
import own from './assets/css/own.css'
import App from './App.vue'
import router from './routers'
import store from './stores'
import api from './util/api'
import Scroller from '@/components/scroller'

Vue.config.productionTip = false
Vue.component(Button.name, Button);
Vue.component(Header.name, Header);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component('Scroller', Scroller);
// Vue.use(Test)
Vue.use(CitySelect)
Vue.use(SearchBox)
Vue.prototype.mui = mui
Vue.prototype.$api = api

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')