<template>
  <div class="job-list">
    <h3>Job Explorer</h3>
    <ul>
      <li>
        <router-link to="/" class="nav-link">
          <span></span> Overview
        </router-link>
      </li>
      <li v-for="code in jobCodes" :key="code">
        <router-link :to="'/job/' + code" class="nav-link">
          {{ code }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'JobList',
  data() {
    return {
      jobCodes: [
        'MLA101', 'DSC202', 'AIP303', 'DEV404', 'CLD505',
        'DSA606', 'NLP707', 'CVV808', 'SEC909', 'RLS010'
      ]
    }
  }
}
</script>

<style scoped>
.job-list {
  width: 200px;
  background-color: #e63946;
  color: white;
  padding: 20px;
  border-radius: 6px;
}

.nav-link {
  display: block;
  color: white;
  padding: 6px 0;
  text-decoration: none;
}

.nav-link.router-link-active {
  background-color: white;
  color: #e63946;
  border-radius: 4px;
  padding: 6px;
}
</style>
