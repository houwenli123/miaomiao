import myCitySelect from './CitySelect.vue'

const CitySelect = {
    install(Vue) {
        Vue.component('Own-city-select', myCitySelect)
    }
}
export default CitySelect