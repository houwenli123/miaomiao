<template>
    <Scroller ref="cityList">
        <div id="own-city-select" ref="ownCitySelect">
            <div id="dw" class="own-dw-city">
                <h2 class="own-title" id="dw-city">定位城市</h2>
                <div class="own-content">
                    <a v-for="item in cityDwCity" :key="item.id" class="own-cityBtn" @touchstart="getDwCity(item.id)">{{item.name}}</a>
                </div>
            </div>
            <div id="fw" class="own-fw-city">
                <h2 class="own-title" id="history-city">最近访问城市</h2>
                <div class="own-content">
                    <a v-for="item in cityHisList" :key="item.name" class="own-cityBtn" @touchstart="getDwCity(item.id)">{{item.name}}</a>
                </div>
            </div>
            <div id="hot" class="own-hot-city">
                <h2 class="own-title" id="hot-city">热门城市</h2>
                <div class="own-content">
                    <a v-for="item in cityHotList" :key="item.name" class="own-cityBtn" @touchstart="getDwCity(item.id)">{{item.name}}</a>
                </div>
            </div>
            <div class="own-px-city">
                <div v-for="(item) in cityAllList" :key="item.index">
                    <h2 class="own-title" :id='item.index'>{{item.index}}</h2>
                    <div class="own-px-content">
                        <p v-for="(val) in item.list" :key="val.ym" class="own-px-list" @touchstart="getDwCity(item.id)">{{val.name}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="own-tag">
            <a class="own-tag-name" @touchstart = "toScrollElement(0)">定位</a>
            <a class="own-tag-name" @touchstart = "toScrollElement(1)">最近</a>
            <a class="own-tag-name" @touchstart = "toScrollElement(2)">热门</a>
            <a v-for="(item,index) in cityAllList" :key="item.index" class="own-tag-name" @touchstart = "toScrollElement(index+3)">{{item.index}}</a>
        </div>
    </Scroller>
</template>

<script>
export default {
    name:'citySelect',
    props:{
        cityDwCity:{
            type:Array,
            default:()=>{}
        },
        cityHotList:{
            type:Array,
            default:()=>{}
        },
        cityHisList:{
            type:Array,
            default:()=>{}
        },
        cityAllList:{
            type:Array,
            default:()=>{}
        }
    },
    methods:{
        toScrollElement(index){
            var doms = this.$refs.ownCitySelect.getElementsByTagName('h2');
            var y = doms[index].offsetTop+61;
            this.$refs.cityList.toScrollElement(y);
        },
        getDwCity(id){
            console.log(id);
            this.$api.city.cityChange(id).then((res) => {
                console.log(res);
            })
        }
    }
}

</script>
<style scoped>
#own-city-select {
    background-color: #EFEFF4;
    position: relative;
    margin-bottom: 51px;
}
.own-tag {
    position: fixed;
    top:180px;
    right: 8px;
}
.own-tag-name {
    display: block;
    font-size: 14px;
    color: #333;
    text-align: right;
}
.own-title {
    font-size: 14px;
    margin-top: 0;
    margin-bottom: 0;
    color: #333;
    padding: 10px;
}
.own-content {
    background-color: #FAFAFA;
    padding: 10px 15px;
}
.own-px-content {
    background-color: #FAFAFA;
    padding: 0 15px;
}
.own-content>.own-cityBtn {
    display: inline-block;
    margin: 5px;
    background-color: #fff;
    padding: 5px 20px;
    border-radius: 2px;
    -webkit-border-radius:2px;
    -moz-border-radius:2px;
    -o-border-radius:2px;
    color: #333;
    font-size: 14px;
    border: 1px solid #eee;
}
.own-px-list {
    font-size: 14px;
    margin-top: 0;
    margin-bottom: 0;
    color: #333;
    padding: 10px;
    border-bottom: 1px solid #ddd;
}
.own-px-list:last-child {
    border-bottom: none;
}
</style>
