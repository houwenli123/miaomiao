<template>
<nav class="mui-bar mui-bar-tab">
    <router-link class="mui-tab-item" tag="a" to="/movie">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">电影</span>
    </router-link>
    <router-link class="mui-tab-item" tag="a" to="/cinema">
        <span class="mui-icon mui-icon-email"></span>
        <span class="mui-tab-label">影院</span>
    </router-link>
    <router-link class="mui-tab-item" tag="a" to="/mine">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">我的</span>
    </router-link>
</nav>
</template>

<script>
export default {
    name:'TabBar',
    data () {
        return {
        }
    }
}

</script>
<style scoped>
#tabBar a.router-link-active {
    color: #007aff;
}
.mui-bar {
    box-shadow: none;
    -webkit-box-shadow:none;
    border-top: 1px solid #eee;
}
</style>
