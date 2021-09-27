<template>
    <div>
      <h1>TODOLIST</h1>
        <ol>
          <TodoItem
            v-for="item in todoList"
            v-bind:todo="item"
            v-bind:key="item.id"
          ></TodoItem>
        </ol>
    </div>
</template>
<script>
import TodoItem from './TodoItem'

export default {
  name: 'Todo',
  components: {
    TodoItem
  },
  setup () {
    const todoList = [
      { id: 0, text: '야채' },
      { id: 1, text: '치즈' },
      { id: 2, text: '사람이 먹을수 있는거라면 뭐든지' }
    ]

    return {
      todoList
    }
  }  
}
</script>
<style>
    
</style>