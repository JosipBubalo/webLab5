<template>
  <div class="home-container">
    <div class="content">
      <h1>Welcome to Task Tracker</h1>
      <p>Organize your tasks efficiently and boost your productivity.</p>
      <router-link to="/tasks" class="btn">View Tasks</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
html, body, #app, .home-container {
  height: 100%;
  margin: 0;
  padding: 0;
}

.home-container {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(to right, #42b983, #35495e);
  width: 100%;
  height: 100vh;
  color: white;
}

.content {
  max-width: 600px;
  padding: 20px;
}

h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 15px;
}

p {
  font-size: 1.3rem;
  margin-bottom: 20px;
  opacity: 0.9;
}

.btn {
  display: inline-block;
  padding: 12px 25px;
  font-size: 1.2rem;
  color: white;
  background: #ff9800;
  text-decoration: none;
  border-radius: 5px;
  transition: 0.3s;
}

.btn:hover {
  background: #e68900;
}
</style>