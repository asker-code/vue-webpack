<template>
    <div class="select-tabs">
        <div>{{unFinishedLen}}items</div>
        <div class="option">
            <span 
                v-for="state in status"
                :key="state"
                :class="[state, filter===state ? 'actived' : '']"
                @click="toggleFilter(state)"
            >{{state}}</span>
        </div>
        <div @click="clearAllCompleted">
            Clear Completed
        </div>
    </div>
</template>

<script>
export default {
    props: { //props验证 //props数据传递,且值是写在父组件自定义元素上的 //获取上级发送的状筛选器状态
        filter: {
            type: String,
            require: true
        },
        todos: {
            type: Array,
            require: true
        }
    },
    data(){
        return {
            status: ['all','active','completed']
        }
    },
    methods: {
        clearAllCompleted() {
            this.$emit('clearAllCompleted');
        },
        toggleFilter(state) {           
            this.$emit('toggle', state);
        }
    },
    computed: {
        unFinishedLen() {
            return this.todos.filter(todo => !todo.completed ).length
        }
    }
}
</script>

<style lang="scss" scoped>
.select-tabs{
    width:100%;
    height:40px;
    padding:6px 10px;
    display:flex;
    display:-webkit-flex;
    justify-content: space-between;
    .option{
        span{display:inline-block;padding:0 10px;border:1px solid transparent;border-radius:5px;cursor:pointer;}
        span.actived{border:1px solid goldenrod;color:green}
    }
}
</style>
