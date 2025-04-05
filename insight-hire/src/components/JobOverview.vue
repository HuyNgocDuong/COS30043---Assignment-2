<template>
  <div class="job-overview">
    <div class="header1">
      <h2>Job Overview</h2>
    </div>
    <div class="content">
      <p>
        Insight Hire connects passionate individuals with exciting opportunities in the fields of 
        Artificial Intelligence, Data Science, Cybersecurity, and Software Development. Our platform 
        showcases roles from top tech companies, research labs, and innovation hubs, offering internships, 
        part-time, and full-time positions tailored for experienced professionals alike.
      </p>
      <p>
        Whether you're a student looking to break into the tech industry, a researcher aiming to apply 
        machine learning in real-world contexts, or a developer seeking your next challenge, Insight Hire 
        helps you find roles that match your skills and aspirations. Each job posting includes detailed 
        descriptions, required skills, company background, and application deadlines, so you can make 
        informed decisions about your career.
      </p>
      <p>
        Our team is dedicated to promoting meaningful employment by highlighting roles that provide 
        mentorship, skill development, and long-term impact. Explore the job list on the left to view 
        details of each opportunity, and start building your future today.
      </p>
    </div>
    
    <hr />

    <div class="services">
      <h3>Our Services</h3>
      <div class="service-list">
        <div class="service-card">
          <i class="fas fa-search"></i>
          <h4>Job Search</h4>
          <p>Find the perfect job matching your skills and goals.</p>
        </div>
        <div class="service-card">
          <i class="fas fa-file-alt"></i>
          <h4>Resume Building</h4>
          <p>Create effective resumes that highlight your strengths.</p>
        </div>
        <div class="service-card">
          <i class="fas fa-comments"></i>
          <h4>Interview Prep</h4>
          <p>Prepare for interviews with our expert coaching.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.job-overview {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.header1 h2 {
  color: #002ead;
}

.content p {
  font-size: 16px;
  color: #333;
  line-height: 1.5;
}

.services {
  margin-top: 20px;
}

.service-list {
  display: flex;
  justify-content: space-between;
  gap: 15px;
}

.service-card {
  background: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  width: 30%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.service-card i {
  font-size: 30px;
  color: #002ead;
}

.service-card h4 {
  margin-top: 10px;
  font-size: 18px;
}

.service-card p {
  font-size: 14px;
  color: #555;
}
</style>
