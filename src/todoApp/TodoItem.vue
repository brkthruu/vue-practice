<template>
  <div>
    {{ todo.text }}
  </div>
</template>
<script>
export default {
  name: 'TodoItem',
  props: {
    todo: Object
  },
  setup(props) {
    console.log(props.todo)
  }

}
</script>
<style>
    
</style>