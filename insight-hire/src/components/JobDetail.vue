<template>
  <div v-if="job" class="container mt-4">
    <div class="card shadow-sm border-0 p-4">
      <h2 class="text-primary mb-4">{{ job.job_title }}</h2>

      <div class="mb-3">
        <p><strong class="text-secondary">Category:</strong> {{ job.category }}</p>
        <p><strong class="text-secondary">Location:</strong> {{ job.location }}</p>
        <p><strong class="text-secondary">Type:</strong> {{ job.employment_type }}</p>
        <p><strong class="text-secondary">Salary:</strong> {{ job.salary_range }}</p>
        <p>
          <strong class="text-secondary">Skills:</strong>
          <span
            class="badge bg-info text-dark me-1"
            v-for="(skill, index) in job.required_skills"
            :key="index"
          >
            {{ skill }}
          </span>
        </p>
        <p><strong class="text-secondary">Company:</strong> {{ job.company }}</p>
      </div>

      <hr />

      <h5 class="fw-bold mb-2">Job Description</h5>
      <p>{{ job.job_description }}</p>
    </div>
  </div>

  <div v-else class="container mt-4">
    <div class="alert alert-warning">Job not found.</div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      jobs: [
        {
          job_id: "MLA101",
          job_title: "Machine Learning Intern",
          category: "AI",
          location: "Remote",
          employment_type: "Internship",
          salary_range: "$25/hr",
          required_skills: ["Python", "Scikit-learn", "Git"],
          company: "Swinburne AI Lab",
          job_description:
            "Join our AI team to assist with model training, data preprocessing, and evaluation.",
        },
        {
          job_id: "DSC202",
          job_title: "Data Science Assistant",
          category: "Data Science",
          location: "Melbourne",
          employment_type: "Part-time",
          salary_range: "$35/hr",
          required_skills: ["SQL", "Python", "PowerBI"],
          company: "DataLab Inc.",
          job_description:
            "Support the analytics team by preparing datasets, running statistical analyses, and building dashboards.",
        },
        {
          job_id: "AIP303",
          job_title: "AI Product Engineer",
          category: "Software Development",
          location: "Sydney",
          employment_type: "Full-time",
          salary_range: "$85,000/year",
          required_skills: ["TensorFlow", "Java", "AWS"],
          company: "Tech Innovations Ltd.",
          job_description:
            "Develop AI-driven applications and integrate machine learning models into production systems.",
        },
        {
          job_id: "DEV404",
          job_title: "Full Stack Developer",
          category: "Software Engineering",
          location: "Brisbane",
          employment_type: "Full-time",
          salary_range: "$90,000/year",
          required_skills: ["JavaScript", "Vue.js", "Node.js", "MongoDB"],
          company: "NextGen Software",
          job_description:
            "Design, develop, and deploy web applications using modern technologies.",
        },
        {
          job_id: "CLD505",
          job_title: "Cloud Engineer",
          category: "Cloud Computing",
          location: "Perth",
          employment_type: "Full-time",
          salary_range: "$100,000/year",
          required_skills: ["AWS", "Kubernetes", "Terraform"],
          company: "CloudTech Solutions",
          job_description:
            "Build and maintain scalable cloud infrastructure for enterprise clients.",
        },
        {
          job_id: "DSA606",
          job_title: "Data Analyst",
          category: "Data Science",
          location: "Adelaide",
          employment_type: "Part-time",
          salary_range: "$40/hr",
          required_skills: ["SQL", "Excel", "Tableau"],
          company: "Market Insights Co.",
          job_description:
            "Analyze large datasets to extract insights and create data visualizations.",
        },
        {
          job_id: "NLP707",
          job_title: "NLP Researcher",
          category: "AI",
          location: "Remote",
          employment_type: "Contract",
          salary_range: "$75,000/year",
          required_skills: ["NLP", "Python", "Hugging Face Transformers"],
          company: "AI Research Group",
          job_description:
            "Conduct research on natural language processing and develop innovative text analysis models.",
        },
        {
          job_id: "CVV808",
          job_title: "Computer Vision Engineer",
          category: "AI",
          location: "Canberra",
          employment_type: "Full-time",
          salary_range: "$110,000/year",
          required_skills: ["OpenCV", "C++", "Deep Learning"],
          company: "VisionTech AI",
          job_description:
            "Develop advanced computer vision algorithms for real-world applications.",
        },
        {
          job_id: "SEC909",
          job_title: "Cybersecurity Analyst",
          category: "Security",
          location: "Gold Coast",
          employment_type: "Full-time",
          salary_range: "$95,000/year",
          required_skills: ["Cybersecurity", "Penetration Testing", "SIEM"],
          company: "CyberDefence Australia",
          job_description:
            "Protect corporate networks by monitoring threats, conducting security audits, and preventing cyberattacks.",
        },
        {
          job_id: "RLS010",
          job_title: "Robotics Software Engineer",
          category: "Robotics",
          location: "Hobart",
          employment_type: "Full-time",
          salary_range: "$120,000/year",
          required_skills: ["ROS", "C++", "Python"],
          company: "Autonomous Systems Inc.",
          job_description:
            "Design and develop robotics software for autonomous systems.",
        },
      ],
    };
  },
  computed: {
    job() {
      return this.jobs.find((job) => job.job_id === this.id);
    },
  },
};
</script>
