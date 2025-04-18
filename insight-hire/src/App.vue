<template>
  <div id="app">
    <Header />

    <div class="main-layout">
      <!-- Sidebar -->
      <div class="sidebar">
        <JobList />
      </div>

      <!-- Main content (JobDetail or JobOverview) -->
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import JobList from './components/JobList.vue';

export default {
  name: 'App',
  components: {
    Header,
    JobList
  }
};
</script>

<style>
/* Base styling */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Layout container below the header */
.main-layout {
  display: flex;
  flex: 1;
  padding: 20px;
  gap: 20px;
}

/* Sidebar: JobList.vue */
.sidebar {
  flex: 0 0 250px; /* Fixed width */
  background-color: #dc3545;
  color: white;
  border-radius: 8px;
  padding: 16px;
  min-height: calc(100vh - 76px); /* Adjust for header height */
}

/* Main content: router-view */
.content {
  flex: 1;
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  min-height: calc(100vh - 76px); /* Match sidebar height */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}

/* Responsive: Stack on mobile */
@media (max-width: 768px) {
  .main-layout {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    min-height: auto;
  }

  .content {
    min-height: auto;
  }
}
</style>
