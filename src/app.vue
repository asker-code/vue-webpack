<template>
    <div id="app">
        <div class="cover"></div>
        <div class="mian-layout">
            <Header></Header>
            <Todo></Todo>
            <Footer></Footer>
        </div>
        
    </div>
</template>

<script>
    import Header from './todo/header.vue';
    import Footer from './todo/footer.vue';
    import Todo from './todo/todo.vue';

    export default {
       components: {
           Header,
           Todo,
           Footer,
       }
    }
</script>

<style lang="scss" scoped >
   #app{
       position: absolute;;
       top:0;
       right:0;
       bottom:0;
       left: 0;
       .cover{
           position:fixed;
           top:0;
           left: 0;
           z-index:0;
           width:100%;
           height: 100%;
           background:rgba(43, 49, 49, 0.4)
       }
       .mian-layout{
           position: absolute;
           top:0;
           z-index:2;
           width:100%;
           min-height:500px;
           height: 100%;
           overflow-y:auto;
       }
   }
</style>

