import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [],
  }),
  actions: {
    async fetchTasks() {
      try {
        const storedTasks = localStorage.getItem("tasks");

        if (storedTasks) {
          this.tasks = JSON.parse(storedTasks);
        } else {
          const response = await fetch("https://run.mocky.io/v3/ea434ccc-c16a-4158-9eb0-de5cba7e79c6");
          if (!response.ok) {
            throw new Error("Failed to fetch tasks from Mocky API.");
          }
          const data = await response.json();
          
          this.tasks = data;
          localStorage.setItem("tasks", JSON.stringify(this.tasks));
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
        this.tasks = [];
      }
    },
    addTask(task) {
      this.tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    removeTask(taskId) {
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    toggleTaskStatus(taskId) {
      const task = this.tasks.find((task) => task.id === taskId);
      if (task) {
        task.completed = !task.completed;
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      }
    },
  },
});
