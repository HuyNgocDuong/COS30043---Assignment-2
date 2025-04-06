<template>
  <div class="bg-danger text-white p-3 rounded ">
  <!-- Adding the text-nowrap so it wont make any changes when route to other link -->
    <h4 class="mb-3 text-nowrap">Job Explorer</h4>
    <ul class="list-unstyled">
      <li class="mb-2">
        <router-link to="/" class="nav-link px-2 py-1 rounded text-red" active-class="bg-white text-danger fw-bold">
          Overview
        </router-link>
      </li>
      <li v-for="code in jobCodes" :key="code" class="mb-2">
        <router-link :to="'/job/' + code" class="nav-link px-2 py-1 rounded text-red" active-class="bg-white text-danger fw-bold">
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
    };
  }
};
</script>
