<template>
  <div id="app">
    <Header />

    <div class="main-layout">
      <!-- Sidebar -->
      <div class="sidebar">
        <JobList />
      </div>

      <!-- Main content: router-view (JobOverview or JobDetail) -->
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

/* Layout container */
.main-layout {
  display: flex;
  flex: 1;
  padding: 20px;
  gap: 20px;
}

/* Sidebar */
.sidebar {
  flex: 0 0 250px;
  background-color: #dc3545;
  color: white;
  border-radius: 8px;
  padding: 16px;
  min-height: calc(100vh - 76px); /* Adjust if Header height changes */
}

/* Main content area */
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 12px;
  padding: 32px;
  min-height: calc(100vh - 76px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}


/* Make router-view content fill the height too */
.content > * {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Responsive layout on smaller screens */
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

  .content > * {
    min-height: auto;
  }
}
</style>
