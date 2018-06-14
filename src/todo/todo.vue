<template>
    <section class="real-app">
        <input 
            type="text"
            class="add-input"
            autofocus="autofocus"
            :placeholder="placeholder"
            @keyup.enter= "addTodo"          
        >

        <item
            v-for= "todo in filteredTodos"
            :todo= "todo"
            :key= "todo.id"
            @del= "deleteTodo" 
        ></item>

        <tabs 
            :filter= "filter" 
            :todos= "todos"
            @toggle= "toggleFilter"
            @clearAllCompleted= "clearAllCompleted"
        > </tabs>
    </section>
</template>

<script>
import Item from './item.vue';
import Tabs from './tabs.vue';
let id= 0;
export default {
    components: { //注册组件
        Item,
        Tabs,
    },
    data(){
        return {
            todos: [],
            filter: 'all',
            placeholder: '学海无涯苦作舟'
        }
    },
    methods: {
        addTodo(e){
            if(!e.target.value.trim().length) return;
            this.todos.unshift({
                id: id++,
                content: e.target.value.trim(),
                completed: false
            });
            e.target.value = '';
            this.filter = 'all'
        },
        deleteTodo(id){ //触发子组件
            this.todos.splice(this.todos.findIndex(todo => todo.id === id),1)
        },
        toggleFilter(state) {
            this.filter = state
        },
        clearAllCompleted() {
            this.todos = this.todos.filter(todo => !todo.completed)
        }
    },
    computed: {
        filteredTodos() {
            if(this.filter === 'all'){
                return this.todos
            }
            const completed = this.filter === 'completed';
            return this.todos.filter(todo => completed === todo.completed)

        }
    }
}
</script>

<style lang="scss" scoped>
$colorW: white !default;
.real-app{  
    margin:20px auto;
    width:660px;
    background:$colorW;
    opacity:.98;
    box-shadow:0 2px 15px rgba(44, 41, 41, 0.4); 
    
}
.add-input{
    width: 100%; 
    font-size: 24px; 
    line-height:30px ;
    outline: none;
    color: inherit; 
    box-sizing: border-box;
    font-smoothing: antialiased; 
    padding:15px 20px;
    border: none;
    box-shadow: inset 0 -2px 1px rgba(0,0,0,.03);
}
</style>

