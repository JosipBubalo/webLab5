<template>
    <div class="task-item">
      <p>{{ task.name }}</p>
      <button @click="$emit('delete-task', task.id)">Delete</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      task: Object,
    },
  };
  </script>
  
  <style scoped>
  .task-item {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
  }
  </style>
  