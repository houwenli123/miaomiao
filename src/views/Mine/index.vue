<template>
    <div>
        <Header title="我的影院"/>
        <TabBar/>
    </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
export default {
  name:"Mine",
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
