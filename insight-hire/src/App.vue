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

    <!-- Application Form -->
    <div class="application-form-wrapper">
      <ApplicationForm />
    </div>

    <!-- To-Do List Section -->
    <div class="todo-list-wrapper">
      <ToDoList />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import JobList from './components/JobList.vue'
import ApplicationForm from './components/ApplicationForm.vue'
import ToDoList from './components/ToDoList.vue'

export default {
  components: {
    Header,
    JobList,
    ApplicationForm,
    ToDoList
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

/* Application Form section */
.application-form-wrapper {
  max-width: 1000px;
  margin: 60px auto;
  background-color: #f8f9fa;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
}

/* To-Do List Section */
.todo-list-wrapper {
  max-width: 1000px;
  margin: 60px auto;
  background-color: #f8f9fa;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
}

@media (max-width: 768px) {
  .main-layout {
    flex-direction: column;
    padding: 10px;
  }

  .sidebar {
  flex: 0 0 250px;
  background-color: #dc3545;
  color: white;
  border-radius: 8px;
  padding: 16px;
  min-height: 100vh; 
  overflow-y: auto; 
  max-height: 100vh; 
}


  .content {
    padding: 16px;
  }

  .application-form-wrapper,
  .todo-list-wrapper {
    padding: 20px;
    margin: 30px auto;
  }
}

</style>
