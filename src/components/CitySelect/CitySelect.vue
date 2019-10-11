<template>
    <div id="own-city-select">
        <div id="dw" class="own-dw-city">
            <p class="own-title">定位城市</p>
            <div class="own-content">
                <a class="own-cityBtn">北京</a>
            </div>
        </div>
        <div id="fw" class="own-fw-city">
            <p class="own-title">最近访问城市</p>
            <div class="own-content">
                <a class="own-cityBtn">天津</a>
            </div>
        </div>
        <div id="hot" class="own-hot-city">
            <p class="own-title">热门城市</p>
            <div class="own-content">
                <a class="own-cityBtn">上海</a>
                <a class="own-cityBtn">北京</a>
                <a class="own-cityBtn">广州</a>
                <a class="own-cityBtn">上海</a>
                <a class="own-cityBtn">北京</a>
                <a class="own-cityBtn">广州</a>
                <a class="own-cityBtn">上海</a>
                <a class="own-cityBtn">北京</a>
                <a class="own-cityBtn">广州</a>
                <a class="own-cityBtn">上海</a>
                <a class="own-cityBtn">北京</a>
            </div>
        </div>
        <div class="own-px-city">
            <p id="A" class="own-title">A</p>
            <div class="own-px-content">
                <p class="own-px-list">鞍山</p>
                <p class="own-px-list">安庆</p>
                <p class="own-px-list">鞍山</p>
                <p class="own-px-list">鞍山</p>
                <p class="own-px-list">鞍山</p>
                <p class="own-px-list">鞍山</p>
                <p class="own-px-list">鞍山</p>
                <p class="own-px-list">鞍山</p>
                <p class="own-px-list">鞍山</p>
            </div>
            <p id="B" class="own-title">B</p>
            <div class="own-px-content">
                <p class="own-px-list">鞍山</p>
                <p class="own-px-list">安庆</p>
                <p class="own-px-list">鞍山</p>
                <p class="own-px-list">鞍山</p>
                <p class="own-px-list">鞍山</p>
                <p class="own-px-list">鞍山</p>
                <p class="own-px-list">鞍山</p>
                <p class="own-px-list">鞍山</p>
                <p class="own-px-list">鞍山</p>
            </div>
            <p id="C" class="own-title">C</p>
            <div class="own-px-content">
                <p class="own-px-list">鞍山</p>
                <p class="own-px-list">安庆</p>
                <p class="own-px-list">鞍山</p>
                <p class="own-px-list">鞍山</p>
                <p class="own-px-list">鞍山</p>
                <p class="own-px-list">鞍山</p>
                <p class="own-px-list">鞍山</p>
                <p class="own-px-list">鞍山</p>
                <p class="own-px-list">鞍山</p>
            </div>
        </div>
        <div class="own-tag">
            <a class="own-tag-name" href="#dw">定位</a>
            <a class="own-tag-name" href="#fw">最近</a>
            <a class="own-tag-name" href="#hot">热门</a>
            <a class="own-tag-name" href="#A">A</a>
            <a class="own-tag-name" href="#B">B</a>
            <a class="own-tag-name" href="#C">C</a>
        </div>
    </div>
</template>

<script>
export default {
    name:'citySelect'
}

</script>
<style scoped>
#own-city-select {
    background-color: #EFEFF4;
}
.own-tag {
    position: fixed;
    top:20%;
    right: 3px;
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
