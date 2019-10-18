<template>
    <div class="height100">
        <Scroller ref="movielist">
            <div class="movie-body">
                <ul class="mui-table-view mui-table-view-chevron">
                    <li class="mui-table-view-cell mui-media">
                        <p v-if="ifPlaying=='1'" class="commingSoon-time">10月12日 周六</p>
                        <a class="mui-navigate-right">
                            <img class="mui-media-object mui-pull-left" src="../../assets/images/movie1.jpg">
                            <div class="mui-media-body">
                                中国机长
                                <p class='fontSet mui-ellipsis'>猫眼评分 <span>9.4</span></p>
                                <p class='fontSet mui-ellipsis'>主演：张涵予，欧豪，杜江</p>
                                <p class='mui-ellipsis'>今天227家影院放映3093场</p>
                            </div>
                            <button type="button" class="mui-btn mui-btn-danger">
                                购票
                            </button>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media">
                        <p v-if="ifPlaying=='1'" class="commingSoon-time">10月12日 周六</p>
                        <a class='mui-navigate-right' href="javascript:;">
                            <img class="mui-media-object mui-pull-left" src="../../assets/images/movie2.jpg">
                            <div class="mui-media-body">
                                我和我的祖国
                                <p class='fontSet mui-ellipsis'>猫眼评分 <span>9.4</span></p>
                                <p class='fontSet mui-ellipsis'>主演：张涵予，欧豪，杜江</p>
                                <p class='mui-ellipsis'>今天227家影院放映3093场</p>
                            </div>
                            <button type="button" class="mui-btn mui-btn-danger">
                                购票
                            </button>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media">
                        <p v-if="ifPlaying=='1'" class="commingSoon-time">10月12日 周六</p>
                        <a class="mui-navigate-right">
                            <img class="mui-media-object mui-pull-left" src="../../assets/images/movie1.jpg">
                            <div class="mui-media-body">
                                中国机长
                                <p class='fontSet mui-ellipsis'>猫眼评分 <span>9.4</span></p>
                                <p class='fontSet mui-ellipsis'>主演：张涵予，欧豪，杜江</p>
                                <p class='mui-ellipsis'>今天227家影院放映3093场</p>
                            </div>
                            <button type="button" class="mui-btn mui-btn-danger">
                                购票
                            </button>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media">
                        <p v-if="ifPlaying=='1'" class="commingSoon-time">10月12日 周六</p>
                        <a class="mui-navigate-right">
                            <img class="mui-media-object mui-pull-left" src="../../assets/images/movie1.jpg">
                            <div class="mui-media-body">
                                中国机长
                                <p class='fontSet mui-ellipsis'>猫眼评分 <span>9.4</span></p>
                                <p class='fontSet mui-ellipsis'>主演：张涵予，欧豪，杜江</p>
                                <p class='mui-ellipsis'>今天227家影院放映3093场</p>
                            </div>
                            <button type="button" class="mui-btn mui-btn-danger">
                                购票
                            </button>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media">
                        <p v-if="ifPlaying=='1'" class="commingSoon-time">10月12日 周六</p>
                        <a class='mui-navigate-right' href="javascript:;">
                            <img class="mui-media-object mui-pull-left" src="../../assets/images/movie2.jpg">
                            <div class="mui-media-body">
                                我和我的祖国
                                <p class='fontSet mui-ellipsis'>猫眼评分 <span>9.4</span></p>
                                <p class='fontSet mui-ellipsis'>主演：张涵予，欧豪，杜江</p>
                                <p class='mui-ellipsis'>今天227家影院放映3093场</p>
                            </div>
                            <button type="button" class="mui-btn mui-btn-danger">
                                购票
                            </button>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media">
                        <p v-if="ifPlaying=='1'" class="commingSoon-time">10月12日 周六</p>
                        <a class="mui-navigate-right">
                            <img class="mui-media-object mui-pull-left" src="../../assets/images/movie1.jpg">
                            <div class="mui-media-body">
                                中国机长
                                <p class='fontSet mui-ellipsis'>猫眼评分 <span>9.4</span></p>
                                <p class='fontSet mui-ellipsis'>主演：张涵予，欧豪，杜江</p>
                                <p class='mui-ellipsis'>今天227家影院放映3093场</p>
                            </div>
                            <button type="button" class="mui-btn mui-btn-danger">
                                购票
                            </button>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media">
                        <p v-if="ifPlaying=='1'" class="commingSoon-time">10月12日 周六</p>
                        <a class="mui-navigate-right">
                            <img class="mui-media-object mui-pull-left" src="../../assets/images/movie1.jpg">
                            <div class="mui-media-body">
                                中国机长
                                <p class='fontSet mui-ellipsis'>猫眼评分 <span>9.4</span></p>
                                <p class='fontSet mui-ellipsis'>主演：张涵予，欧豪，杜江</p>
                                <p class='mui-ellipsis'>今天227家影院放映3093场</p>
                            </div>
                            <button type="button" class="mui-btn mui-btn-danger">
                                购票
                            </button>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media">
                        <p v-if="ifPlaying=='1'" class="commingSoon-time">10月12日 周六</p>
                        <a class="mui-navigate-right">
                            <img class="mui-media-object mui-pull-left" src="../../assets/images/movie1.jpg">
                            <div class="mui-media-body">
                                中国机长
                                <p class='fontSet mui-ellipsis'>猫眼评分 <span>9.4</span></p>
                                <p class='fontSet mui-ellipsis'>主演：张涵予，欧豪，杜江</p>
                                <p class='mui-ellipsis'>今天227家影院放映3093场</p>
                            </div>
                            <button type="button" class="mui-btn mui-btn-danger">
                                购票
                            </button>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media">
                        <p v-if="ifPlaying=='1'" class="commingSoon-time">10月12日 周六</p>
                        <a class="mui-navigate-right">
                            <img class="mui-media-object mui-pull-left" src="../../assets/images/movie1.jpg">
                            <div class="mui-media-body">
                                中国机长
                                <p class='fontSet mui-ellipsis'>猫眼评分 <span>9.4</span></p>
                                <p class='fontSet mui-ellipsis'>主演：张涵予，欧豪，杜江</p>
                                <p class='mui-ellipsis'>今天227家影院放映3093场</p>
                            </div>
                            <button type="button" class="mui-btn mui-btn-danger">
                                购票
                            </button>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media">
                        <p v-if="ifPlaying=='1'" class="commingSoon-time">10月12日 周六</p>
                        <a class="mui-navigate-right">
                            <img class="mui-media-object mui-pull-left" src="../../assets/images/movie1.jpg">
                            <div class="mui-media-body">
                                中国机长
                                <p class='fontSet mui-ellipsis'>猫眼评分 <span>9.4</span></p>
                                <p class='fontSet mui-ellipsis'>主演：张涵予，欧豪，杜江</p>
                                <p class='mui-ellipsis'>今天227家影院放映3093场</p>
                            </div>
                            <button type="button" class="mui-btn mui-btn-danger">
                                购票
                            </button>
                        </a>
                    </li>
                </ul>
            </div>
        </Scroller>
    </div>
</template>

<script>
export default {
    name:'movieList',
    props:{
        ifPlaying:{
            type:String,
            default:"0"
        }
    }
}

</script>
<style scoped>
.commingSoon {
    margin-bottom: 50px;
}
.height100 {
    height: 100%;
}
.movie-body {
    position: relative;
    margin-bottom: 51px;
}
.mui-table-view-chevron .mui-table-view-cell {
    padding-right: 44px;
}
.commingSoon-time {
    font-size: 14px;
    color: #000;
    line-height: 30px;
}
.mui-table-view .mui-media-object {
    max-width: none;
    height: 90px;
}
.fontSet {
    color: #555;
    line-height: 26px;
}
.mui-navigate-right:after, .mui-push-right:after {
    content: none;
}
.fontSet> span {
    color: #FDB32A;
}
</style>
