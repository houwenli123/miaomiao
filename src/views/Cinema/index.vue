<template>
    <div>
      <Header title="喵喵电影"/>
      <TabBar/>
    </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
export default {
  name:"Cinema",
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
</style>
