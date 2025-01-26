<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/tasks">Tasks</router-link>
      <router-link to="/add-task">Add Task</router-link>
    </nav>
    <router-view :key="$route.path" />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
}

nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
}

nav a {
  text-decoration: none;
  color: #42b983;
  font-weight: bold;
}

nav a.router-link-exact-active {
  text-decoration: underline;
  color: #35495e;
}

</style>