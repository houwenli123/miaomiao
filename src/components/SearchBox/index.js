import mySearchBox from './SearchBox.vue'
const SearchBox = {
    install(Vue) {
        Vue.component('Own-search-box', mySearchBox)
    }
}
export default SearchBox