<template>
  <div id="app">
    <Header />
    <div class="container">
      <JobList />
      <router-view />

    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import JobList from './components/JobList.vue';
//import JobOverview from './components/JobOverview.vue';

export default {
  name: 'App',
  components: {
    Header,
    JobList,
    //JobOverview
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

.container {
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: 20px;
  gap: 20px;
}
</style>
