<template>
    <div id="main">
        <Header title="喵喵影院"/>
        <div class="content">
          <mt-navbar>
            <router-link to="/movie/city" class='mint-tab-item'>城市<span class="mui-icon mui-icon-arrowdown"></span></router-link>
            <router-link to="/movie/nowPlaying" class='mint-tab-item'>正在上映</router-link>
            <router-link to="/movie/commingSoon" class='mint-tab-item'>即将上映</router-link>
            <router-link to="/movie/search" class='mint-tab-item'>搜索</router-link>
          </mt-navbar>
          <router-view></router-view>
        </div>
        <TabBar/>
    </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
export default {
  name:"Movie",
  data () {
    return {
    }
  },
  components:{
    Header,
    TabBar
  }
}

</script>
<style scoped>
.content{
  margin-top: 40px;
}
.mint-navbar .mint-tab-item.router-link-active{
    border-bottom: 3px solid #26a2ff;
    color: #26a2ff;
    margin-bottom: 0;
}
a {
    color: inherit;
}
</style>
