<template>
    <div class="city" v-if="cityHotList && cityHisList && cityAllList && cityDwCity">
        <Own-city-select :cityDwCity='cityDwCity'  :cityHotList='cityHotList' :cityHisList='cityHisList' :cityAllList='cityAllList'/>
    </div>
</template>

<script>
export default {
    name:'city',
    data () {
        return {
            cityHotList:[],
            cityHisList:[],
            cityAllList:[],
            cityDwCity:[]
        }
    },
    mounted(){
        var cityHotList = window.localStorage.getItem('cityHotList');
        var cityHisList = window.localStorage.getItem('cityHisList');
        var cityAllList = window.localStorage.getItem('cityAllList');
        var cityDwCity = window.localStorage.getItem('cityDwCity');
        if(cityHotList&&cityHisList&&cityAllList&&cityDwCity) {
            this.cityHotList = JSON.parse(cityHotList);
            this.cityHisList = JSON.parse(cityHisList);
            this.cityAllList = JSON.parse(cityAllList);
            this.cityDwCity = JSON.parse(cityDwCity);
        } else {
            this.$api.city.cityList().then((res) => {
                console.log(res);
                if(res.status === 200 && res.statusText == 'OK') {
                    var data = res.data;
                    console.log(data);
                    var {cityHotList,cityHisList,cityAllList,cityDwCity} = this.formatData(data);
                    cityAllList.sort((n1,n2) => {
                        if(n1.index>n2.index){
                            return 1
                        } else {
                            return -1;
                        }
                    });
                    this.cityHotList = cityHotList;
                    this.cityHisList = cityHisList;
                    this.cityAllList = cityAllList;
                    this.cityDwCity = cityDwCity;
                    
                    window.localStorage.setItem('cityHotList',JSON.stringify(cityHotList));
                    window.localStorage.setItem('cityHisList',JSON.stringify(cityHisList));
                    window.localStorage.setItem('cityAllList',JSON.stringify(cityAllList));
                    window.localStorage.setItem('cityDwCity',JSON.stringify(cityDwCity));
                }
            })
        }
    },
    methods:{
        formatData(data){
            var cityDwCity=[],cityHotList=[],cityHisList=[],cityAllList=[];
            for(var i=0;i<data.length;i++){
                var firstLetter = data[i].ym.substring(0,1).toUpperCase();
                if(data[i].dw=="1") {
                    cityDwCity.push(data[i]);
                }
                if(data[i].isHot=="1") {
                    cityHotList.push(data[i]);
                }
                if(data[i].history=="1") {
                    cityHisList.push(data[i]);
                }
                var val = toCom(firstLetter);
                if(toCom(firstLetter) === -1){
                    cityAllList.push({index:firstLetter,list:[{name:data[i].name,ym:data[i].ym}]})
                } else {
                   cityAllList[val].list.push({name:data[i].name,ym:data[i].ym});
                }
            }

            function toCom(firstLetter){
                for(var j=0;j<cityAllList.length;j++){
                    if(firstLetter === cityAllList[j].index){
                        return j;
                    } 
                }
                return -1;
            }
            
            return {cityHotList,cityHisList,cityAllList,cityDwCity};
        }
    }
}

</script>
<style scoped>
.city {
    bottom: 0px;
    position: absolute;
    top: 61px;
}
</style>
