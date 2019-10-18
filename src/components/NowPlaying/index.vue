<template>
    <div class="nowPlaying">
        <MovieList :ifPlaying="ifPlaying"/>
    </div>
</template>

<script>
import MovieList from '../MovieList'
export default {
    name:'nowPlaying',
    data () {
        return {
            ifPlaying:"0"
        }
    },
    components:{
        MovieList
    }
}

</script>
<style scoped>
.nowPlaying {
    width: 100vw;
    bottom: 0px;
    position: absolute;
    top: 59px;
}
.mui-table-view .mui-media-object {
    max-width: auto;
    height: 90px;
}
.fontSet {
    color: #555;
    line-height: 26px;
}
.fontSet> span {
    color: #FDB32A;
}
</style>
