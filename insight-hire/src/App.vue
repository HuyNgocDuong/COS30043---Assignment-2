<template>
  <div id="app">
    <Header />

    <!-- Job Explorer & Routed Views -->
    <div class="main-layout">
      <div class="sidebar">
        <JobList />
      </div>

      <div class="content">
        <router-view />
      </div>
    </div>

    <!-- Application Form BELOW the main layout -->
    <div class="application-form-wrapper">
      <ApplicationForm />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import JobList from './components/JobList.vue'
import ApplicationForm from './components/ApplicationForm.vue'

export default {
  components: {
    Header,
    JobList,
    ApplicationForm
  }
}
</script>

<style>
/* Layout for job explorer and view */
.main-layout {
  display: flex;
  gap: 20px;
  padding: 20px;
}

.sidebar {
  flex: 0 0 250px;
  background-color: #dc3545;
  color: white;
  border-radius: 8px;
  padding: 16px;
  min-height: 100%;
}

.content {
  flex: 1;
  background-color: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

/* Application Form separate */
.application-form-wrapper {
  max-width: 1000px;
  margin: 60px auto;
  background-color: #f8f9fa;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
}
</style>
