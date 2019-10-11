<template>
    <mt-header fixed :title="title"></mt-header>
</template>

<script>
export default {
    name:'Header',
    props:{
        title:{
            type: String,
            default: "喵喵影院"
        }
    }
}

</script>
<style scoped>
</style>
