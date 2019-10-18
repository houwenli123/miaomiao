<template>
    <div class='scroller' ref="scroller">
        <slot/>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name:'scroller',
    props:{
        handleToScroll:{
            type:Function,
            default:function(){}
        },
        handleToTouchEnd:{
            type: Function,
            default: function(){}
        }
    },
    mounted(){
        var scroll = new Bscroll(this.$refs.scroller,{
            tap:true,
            probeType: 1
        });
        this.scroll = scroll;
        scroll.on('scroll',(pos)=>{
            this.handleToScroll(pos);
        });

        scroll.on('touchEnd',(pos)=>{
            this.handleToTouchEnd(pos);
        })
    },
    methods:{
        toScrollElement(y){
            this.scroll.scrollTo(0,-y);
        }
    }
}

</script>
<style scoped>
.scroller {
    height:100%;
}
</style>
