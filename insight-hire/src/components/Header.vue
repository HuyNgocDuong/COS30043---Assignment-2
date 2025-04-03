<template>
  <header class="header">
    <div class="overlay">
      <h1>Insight Hire</h1>
      <p>Empowering Employers, Connecting Talent, and Building Brighter Futures.</p>
    </div>
  </header>
</template> 

<script>
export default {
  name: "HeaderSection",
};
</script>

<style>
.header {
  background: url('@/assets/image.png') center/cover no-repeat;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
}

.header .overlay {
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  padding: 20px;
}
</style>
