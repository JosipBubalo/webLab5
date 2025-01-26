<template>
  <div class="tasks-container">
    <div class="content">
      <h1>Your Tasks</h1>

      <div class="filter">
        <label for="filter">Filter:</label>
        <select id="filter" v-model="filterStatus">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>

      <div class="tasks-list">
        <div class="task-card" v-for="task in filteredTasks" :key="task.id">
          <div class="task-info">
            <span :class="{ completed: task.completed }">{{ task.name }}</span>
          </div>
          <div class="task-actions">
            <button @click="toggleStatus(task.id)" :class="{ completedBtn: task.completed }">
              {{ task.completed ? "Undo" : "Complete" }}
            </button>
            <button @click="deleteTask(task.id)" class="delete-btn">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useTaskStore } from "../stores/taskStore";

export default {
  setup() {
    const taskStore = useTaskStore();
    const filterStatus = ref("all");

    const filteredTasks = computed(() => {
      if (filterStatus.value === "completed") {
        return taskStore.tasks.filter(task => task.completed);
      } else if (filterStatus.value === "incomplete") {
        return taskStore.tasks.filter(task => !task.completed);
      }
      return taskStore.tasks;
    });

    const deleteTask = (taskId) => {
      taskStore.removeTask(taskId);
    };

    const toggleStatus = (taskId) => {
      taskStore.toggleTaskStatus(taskId);
    };

    onMounted(() => {
      taskStore.fetchTasks();
    });

    return { taskStore, deleteTask, toggleStatus, filterStatus, filteredTasks };
  },
};
</script>

<style scoped>
html, body {
  scroll-behavior: smooth;
}

.tasks-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #42b983, #35495e);
  color: white;
  overflow: auto;
}

.content {
  max-width: 600px;
  width: 90%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
}

/* Filter dropdown */
.filter {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.filter label {
  font-size: 1rem;
}

.filter select {
  padding: 8px;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

/* Lista taskova */
.tasks-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: auto;
  max-height: 65vh;
  padding-right: 5px;
  padding-bottom: 15px;
  width: 100%;
  scrollbar-gutter: stable;
}

.tasks-list::-webkit-scrollbar {
  width: 8px;
}

.tasks-list::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
}

.task-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 8px 12px;
  border-radius: 8px;
  transition: background 0.3s ease;
  font-size: 1rem;
  will-change: transform, opacity;
}

.task-card:hover {
  background: rgba(255, 255, 255, 0.2);
}

.task-info {
  font-size: 1rem;
  text-align: left;
  flex-grow: 1;
}

.completed {
  text-decoration: line-through;
  color: #b0c4de;
}

.task-actions {
  display: flex;
  gap: 8px;
}

button {
  border: none;
  padding: 6px 10px;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s ease;
}

.completedBtn {
  background-color: #4caf50;
  color: white;
}

.completedBtn:hover {
  background-color: #388e3c;
}

.delete-btn {
  background-color: #ff6b6b;
  color: white;
}

.delete-btn:hover {
  background-color: #d9534f;
}

.tasks-list::after {
  content: "";
  height: 1px;
  display: block;
  visibility: hidden;
}

.tasks-list {
  will-change: transform, opacity;
}
</style>