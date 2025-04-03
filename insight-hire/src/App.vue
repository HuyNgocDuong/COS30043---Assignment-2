<template>
  <div id="app">
    <Header />
    
  </div>
</template>

<script>
// Import components
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  }
};
</script>

<style>
/* Global styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
