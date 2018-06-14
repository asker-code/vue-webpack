<template>
    <div class="footer">
        <p>Power by <span v-text="name"></span></p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            name: 'asker-code'
        }
    }
}
</script>

<style lang="scss" scoped>
.footer{
    width:660px;
    height:50px;
    line-height:50px;
    margin:20px auto;
    p {
        color: #fff;
        font-size: 14px;
        text-align:center;
        opacity: .9;
    }
}
</style>
