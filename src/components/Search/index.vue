<template>
    <div class="search">
        <Own-search-box/>
    </div>
</template>

<script>
export default {
    name:'search',
    data () {
        return {
        }
    }
}

</script>
<style scoped>
.search {
    margin-bottom: 50px;
}
input[type='search'],input[type='search']:focus {
    font-size:14px;
}
</style>
