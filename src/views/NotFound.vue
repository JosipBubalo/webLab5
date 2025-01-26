<template>
  <div class="not-found-container">
    <div class="content">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <router-link to="/" class="btn">Go Back Home</router-link>
    </div>
  </div>
</template>

<style scoped>
.not-found-container {
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
  max-width: 600px;
  padding: 20px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.content:hover {
  transform: scale(1.02);
}

h1 {
  font-size: 5rem;
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
