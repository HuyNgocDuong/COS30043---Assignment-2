<template>
  <div class="container mt-5">
    <h2 class="mb-4 text-danger">Application Form</h2>
    <form
      @submit.prevent="submitForm"
      method="post"
      action="http://mercury.swin.edu.au/it000000/formtest.php"
      novalidate
    >
      <!-- Personal Details -->
      <fieldset class="mb-4">
        <legend>Personal Details</legend>
        <div class="mb-3">
          <label class="form-label">First Name</label>
          <input type="text" name="firstName" v-model="form.firstName" class="form-control" required />
          <div class="text-danger" v-if="errors.firstName">{{ errors.firstName }}</div>
        </div>
        <div class="mb-3">
          <label class="form-label">Last Name</label>
          <input type="text" name="lastName" v-model="form.lastName" class="form-control" required />
          <div class="text-danger" v-if="errors.lastName">{{ errors.lastName }}</div>
        </div>
        <div class="mb-3">
          <label class="form-label">Date of Birth</label>
          <input type="date" name="dob" v-model="form.dob" class="form-control" required />
          <div class="text-danger" v-if="errors.dob">{{ errors.dob }}</div>
        </div>
      </fieldset>

      <!-- Account Info -->
      <fieldset class="mb-4">
        <legend>Account Info</legend>
        <div class="mb-3">
          <label class="form-label">Username</label>
          <input type="text" name="username" v-model="form.username" class="form-control" required />
          <div class="text-danger" v-if="errors.username">{{ errors.username }}</div>
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input type="password" name="password" v-model="form.password" class="form-control" required />
          <div class="text-danger" v-if="errors.password">{{ errors.password }}</div>
        </div>
        <div class="mb-3">
          <label class="form-label">Confirm Password</label>
          <input type="password" name="confirmPassword" v-model="form.confirmPassword" class="form-control" required />
          <div class="text-danger" v-if="errors.confirmPassword">{{ errors.confirmPassword }}</div>
        </div>
      </fieldset>

      <!-- Contact -->
      <fieldset class="mb-4">
        <legend>Contact</legend>
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input type="email" name="email" v-model="form.email" class="form-control" required />
          <div class="text-danger" v-if="errors.email">{{ errors.email }}</div>
        </div>
        <div class="mb-3">
          <label class="form-label">Mobile Number</label>
          <input type="text" name="mobile" v-model="form.mobile" class="form-control" required />
          <div class="text-danger" v-if="errors.mobile">{{ errors.mobile }}</div>
        </div>
        <div class="mb-3">
          <label class="form-label">Street Address</label>
          <input type="text" name="street" v-model="form.street" class="form-control" maxlength="40" />
        </div>
        <div class="mb-3">
          <label class="form-label">Suburb</label>
          <input type="text" name="suburb" v-model="form.suburb" class="form-control" maxlength="20" />
        </div>
        <div class="mb-3">
          <label class="form-label">Postcode</label>
          <input type="text" name="postcode" v-model="form.postcode" class="form-control" required />
          <div class="text-danger" v-if="errors.postcode">{{ errors.postcode }}</div>
        </div>
      </fieldset>

      <!-- Job Category -->
      <div class="mb-4">
        <label class="form-label">Preferred Job Category</label>
        <select name="jobCategory" v-model="form.jobCategory" class="form-select" required>
          <option disabled value="">Select a category</option>
          <option>AI</option>
          <option>Data Science</option>
          <option>Web Development</option>
        </select>
        <div class="text-danger" v-if="errors.jobCategory">{{ errors.jobCategory }}</div>
      </div>

      <!-- Terms and Submit -->
      <div class="form-check mb-3">
        <input type="checkbox" class="form-check-input" v-model="showTerms" id="termsCheck" />
        <label for="termsCheck" class="form-check-label fw-semibold">
          I agree to the Terms and Conditions
        </label>
      </div>
      <div class="text-danger mb-3" v-if="errors.terms">{{ errors.terms }}</div>

      <div v-if="showTerms" class="alert alert-secondary">
        <h6 class="fw-bold">Job Explorer Terms & Conditions</h6>
        <ul class="mb-0">
          <li>You must be at least 16 years of age to apply.</li>
          <li>Information submitted must be accurate and truthful.</li>
          <li>Each user is allowed to submit only one application per role.</li>
          <li>Spamming or misuse of the system may result in account restriction.</li>
          <li>Insight Hire reserves the right to contact you for verification.</li>
        </ul>
      </div>

      <button type="submit" class="btn btn-danger px-4 py-2 fw-semibold">
        Submit Application
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ApplicationForm',
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        street: '',
        suburb: '',
        postcode: '',
        mobile: '',
        dob: '',
        jobCategory: ''
      },
      errors: {},
      showTerms: false
    };
  },
  methods: {
    submitForm() {
      this.errors = {};
      const specialCharPattern = /[$%^&*]/;
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!this.form.firstName.match(/^[A-Za-z]+$/)) {
        this.errors.firstName = 'First name must contain letters only.';
      }
      if (!this.form.lastName.match(/^[A-Za-z]+$/)) {
        this.errors.lastName = 'Last name must contain letters only.';
      }
      if (this.form.username.length < 3) {
        this.errors.username = 'Username must be at least 3 characters.';
      }
      if (this.form.password.length < 8 || !specialCharPattern.test(this.form.password)) {
        this.errors.password = 'Password must be at least 8 characters and include a special character ($, %, ^, &, *).';
      }
      if (this.form.password !== this.form.confirmPassword) {
        this.errors.confirmPassword = 'Passwords do not match.';
      }
      if (!emailPattern.test(this.form.email)) {
        this.errors.email = 'Please enter a valid email address.';
      }
      if (!/^\d{4}$/.test(this.form.postcode)) {
        this.errors.postcode = 'Postcode must be exactly 4 digits.';
      }
      if (!/^04\d{8}$/.test(this.form.mobile)) {
        this.errors.mobile = 'Mobile number must start with 04 and be exactly 10 digits.';
      }

      const dobDate = new Date(this.form.dob);
      const today = new Date();
      const age = today.getFullYear() - dobDate.getFullYear();
      if (!this.form.dob || age < 16) {
        this.errors.dob = 'You must be at least 16 years old.';
      }

      if (!this.form.jobCategory) {
        this.errors.jobCategory = 'Please select a job category.';
      }

      if (!this.showTerms) {
        this.errors.terms = 'You must agree to the terms and conditions to continue.';
      }

      if (Object.keys(this.errors).length === 0) {
        this.$el.querySelector('form').submit();
      }
    }
  }
};
</script>

<style scoped>
button[type="submit"] {
  width: 100%;
  padding: 12px;
  font-weight: 600;
  border-radius: 8px;
  background-color: #dc3545;
  border: none;
  color: #fff;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button[type="submit"]:hover {
  background-color: #bb2d3b;
  transform: translateY(-2px);
}

.form-check-label {
  cursor: pointer;
  transition: color 0.2s ease, text-decoration 0.2s ease;
}

.form-check-label:hover {
  color: #dc3545;
  text-decoration: underline;
}
</style>
