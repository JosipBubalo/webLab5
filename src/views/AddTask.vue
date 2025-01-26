<template>
  <div class="add-task-container">
    <div class="content">
      <h1>Add a New Task</h1>
      <form @submit.prevent="addNewTask">
        <input v-model="taskName" placeholder="Enter task name" required />
        <button type="submit">Add Task</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useTaskStore } from "../stores/taskStore";

export default {
  setup() {
    const taskStore = useTaskStore();
    const taskName = ref("");

    const addNewTask = () => {
      if (taskName.value.trim() !== "") {
        taskStore.addTask({
          id: Date.now(),
          name: taskName.value,
          completed: false
        });
        taskName.value = "";
      }
    };

    return { taskName, addNewTask };
  },
};
</script>

<style scoped>
.add-task-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #42b983, #35495e);
  color: white;
  overflow: hidden;
}

.content {
  max-width: 500px;
  width: 90%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.content:hover {
  transform: scale(1.02);
}

h1 {
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
}

input {
  padding: 12px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  text-align: center;
  outline: none;
  transition: box-shadow 0.3s ease;
}

input:focus {
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

button {
  padding: 12px;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: #ff9800;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
}

button:hover {
  background: #e68900;
  transform: scale(1.05);
}
</style>
