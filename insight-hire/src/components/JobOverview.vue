<template>
  <div class="job-overview">
    <div class="mb-4">
      <h2 class="text-danger">Job Overview</h2>
        <p>
          Insight Hire connects passionate individuals with exciting opportunities in the fields of Artificial Intelligence,
          Data Science, Cybersecurity, and Software Development. Our platform showcases roles from top tech companies, research labs,
          and innovation hubs, offering internships, part-time, and full-time positions tailored for experienced professionals alike.
        </p>
        <p>
          Whether you're a student looking to break into the tech industry, a researcher aiming to apply machine learning in real-world contexts,
          or a developer seeking your next challenge, Insight Hire helps you find roles that match your skills and aspirations.
          Each job posting includes detailed descriptions, required skills, company background, and application deadlines,
          so you can make informed decisions about your career.
        </p>
        <p>
          Our team is dedicated to promoting meaningful employment by highlighting roles that provide mentorship, skill development, and long-term impact.
          Explore the job list on the left to view details of each opportunity, and start building your future today.
        </p>
    </div>

    <hr />

    <div class="mt-1">
      <h3 class="mb-3">Our Services</h3>
      <div class="service-cards">
        <div class="card text-center shadow-sm">
          <div class="card-body">
            <i class="fas fa-search fa-2x mb-3"></i>
            <h5 class="card-title">Job Search</h5>
            <p class="card-text">Find the perfect job matching your skills and goals.</p>
          </div>
        </div>
        <div class="card text-center shadow-sm">
          <div class="card-body">
            <i class="fas fa-file-alt fa-2x mb-3"></i>
            <h5 class="card-title">Resume Building</h5>
            <p class="card-text">Create effective resumes that highlight your strengths.</p>
          </div>
        </div>
        <div class="card text-center shadow-sm">
          <div class="card-body">
            <i class="fas fa-comments fa-2x mb-3"></i>
            <h5 class="card-title">Interview Prep</h5>
            <p class="card-text">Prepare for interviews with our expert coaching.</p>
          </div>
        </div>
        <div class="card text-center shadow-sm">
          <div class="card-body">
            <i class="fas fa-user-tie fa-2x mb-3"></i>
            <h5 class="card-title">Career Counseling</h5>
            <p class="card-text">Get personalized guidance on your career path and growth strategy.</p>
          </div>
        </div>
        <div class="card text-center shadow-sm">
          <div class="card-body">
            <i class="fas fa-chalkboard-teacher fa-2x mb-3"></i>
            <h5 class="card-title">Skill Workshops</h5>
            <p class="card-text">Attend live workshops to sharpen your technical and soft skills.</p>
          </div>
        </div>
        <div class="card text-center shadow-sm">
          <div class="card-body">
            <i class="fas fa-users fa-2x mb-3"></i>
            <h5 class="card-title">Networking Events</h5>
            <p class="card-text">Connect with professionals and recruiters in your industry.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobOverview'
};
</script>

<style scoped>
.job-overview {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.job-overview p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 0.75rem;
}

.service-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.service-cards .card {
  flex: 1 1 30%;
  min-width: 260px;
  padding: 16px;
  border-radius: 12px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.service-cards .card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.card-body i {
  color: #ff0000 ;
}
</style>
