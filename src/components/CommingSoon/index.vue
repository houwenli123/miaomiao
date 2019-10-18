<template>
    <div class="commingSoon">
       <MovieList :ifPlaying="ifPlaying"/>
    </div>
</template>

<script>
import MovieList from '../MovieList'
export default {
    name:'commingSoon',
    data () {
        return {
            ifPlaying:"1"
        }
    },
    components:{
        MovieList
    }
}

</script>
<style scoped>
.commingSoon {
    width: 100vw;
    bottom: 0px;
    position: absolute;
    top: 59px;
}
.commingSoon-time {
    font-size: 14px;
    color: #000;
    line-height: 30px;
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
