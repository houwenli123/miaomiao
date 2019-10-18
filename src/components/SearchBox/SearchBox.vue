<template>
    <div class="own-search-box">
        <div class="own-searchbar">
            <div class="own-searchbar-inner">
                <span class="own-icon own-icon-search"></span>
                <input type="search" placeholder="搜索" class="own-searchbar-core">
            </div> 
            <a class="own-searchbar-cancel">取消</a>
        </div>
    </div>
</template>

<script>
export default {
    name:'searchBox',
    data () {
        return {
        }
    }
}

</script>
<style scoped>
.own-searchbar {
    padding: 10px 15px;
    position: relative;
    border-bottom: 1px solid #ddd;
}
.own-searchbar-inner {
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 3px;
    -webkit-border-radius:3px;
    -o-border-radius:3px;
    margin-right: 40px;
    padding-left: 25px;
    position: relative;
}
.own-searchbar-core {
    font-size: 14px;
    vertical-align: middle;
    height: 26px;
    margin-bottom: 0;
    background-color: #fff;
    text-align: left;
    padding: 1px;
}
.own-icon-search {
    position: absolute;
    top: 4px;
    left: 5px;
    font-family: Muiicons;
}
.own-icon-search:before {
    content:'\e466'
}
.own-searchbar-cancel {
    font-size: 14px;
    position: absolute;
    top: 13px;
    right: 15px;
}
</style>
