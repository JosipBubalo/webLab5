<template>
    <div>
      <TaskItem 
        v-for="task in tasks" 
        :key="task.id" 
        :task="task" 
        @delete-task="deleteTask" 
      />
    </div>
  </template>
  
  <script>
  import { useTaskStore } from '../stores/taskStore';
  import TaskItem from './TaskItem.vue';
  
  export default {
    components: { TaskItem },
    setup() {
      const taskStore = useTaskStore();
  
      const deleteTask = (taskId) => {
        taskStore.removeTask(taskId);
      };
  
      return { tasks: taskStore.tasks, deleteTask };
    },
  };
  </script>
  