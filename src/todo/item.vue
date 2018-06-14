<template lang="html">
    <div :class="['todo-item',todo.completed ? 'completed' : '']">
        <input
            type="checkbox"
            class="toggle"
            v-model="todo.completed"
        >
        <label>{{todo.content}}</label>
        <button class="destroy" @click="deleteTodo"></button>
    </div>
</template>

<script>
export default {
    props: { //props验证
        todo: {
            type: Object,
            required: true
        }
    },
    methods: {
        deleteTodo(){
            this.$emit('del',this.todo.id); //父组件可监听子组件,子组件用 $emit触发父组件的自定义事件
        }
    }
}
</script>

<style lang="scss" scoped>
$heightBar: 32px !default;
@mixin inputStyle {
    background:none;
    appearance:none;
    -webkit-appearance:none;
    border:none;
    outline: none;
    cursor:pointer;
}
@mixin delateBtn($color,$rotate){
    content: '';
    border-top:2px solid $color;
    margin-top: -1px;
    width:60%;
    position: absolute;
    top:50%;left:0;
    transform:rotate($rotate);
    -webkit-transform:rotate($rotate);
}


.todo-item{
    position: relative;
    background-color: #fff;
    font-size: 22px;
    letter-spacing: 1px;
    border-bottom: 1px solid rgba(0,0,0,.06);
    padding: 8px 10px;
    overflow: hidden;
    .toggle{
        @include inputStyle;
        position:relative;
        width:$heightBar;
        height: $heightBar;
        line-height:$heightBar;
        text-align:center;
        border-radius:50%;
        border:1px solid #ccc;
        float: left;
    }
    label{
        margin-left:10px;
        line-height:$heightBar;
        float: left;
    }
    button{
        @include inputStyle;
        float: right;
        width:$heightBar;
        height: $heightBar;
        position:absolute;
        top:5px;
        right:10px;   

    }
    .toggle[type="checkbox"]:checked:after{
        content: '';
        position: absolute;
        left:50%;
        top:50%;
        width:16px;
        height:8px; 
        margin-left:-8px;
        margin-top:-6px;
        border-left: 3px solid green; 
        border-bottom: 3px solid green; 
        transform: rotate(-45deg); 
    }
    .toggle[type="checkbox"]:checked{
        border: 1px solid green;
    }
    
    button::after{
        @include delateBtn(rgb(161, 6, 6),45deg)
    }
    button::before{
        @include delateBtn(rgb(161, 6, 6),-45deg)
    }

    
}
.todo-item.completed label{
    color: #cccccc;
    text-decoration: line-through;
}
</style>

