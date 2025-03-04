<template>
  <div class="registration-container">
    <div class="registration-card">
      <h1>Teacher Registration</h1>
      <p>Fill in the details to register as a teacher.</p>
      <form @submit.prevent="handleRegistration">
        <div class="form-row">
          <div class="form-group">
            <label for="name">Full Name</label>
            <input type="text" id="name" v-model="name" placeholder="Enter your full name" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" placeholder="Enter your email" required />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="dob">Date of Birth</label>
            <input type="date" id="dob" v-model="dob" required />
          </div>
          <div class="form-group">
            <label for="qualification">Highest Qualification</label>
            <select id="qualification" v-model="qualification" required>
              <option value="" disabled selected>Select qualification</option>
              <option value="Bachelor">Bachelor's Degree</option>
              <option value="Master">Master's Degree</option>
              <option value="PhD">PhD</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label for="subjects">Subjects You Can Teach</label>
          <input type="text" id="subjects" v-model="subjects" placeholder="Enter subjects separated by commas" required />
        </div>

        <div class="form-group">
          <label for="experience">Teaching Experience (Years)</label>
          <input type="number" id="experience" v-model="experience" placeholder="Enter years of experience" required />
        </div>

        <div class="form-group">
          <label>Gender</label>
          <div class="gender-options">
            <input type="radio" id="male" value="Male" v-model="gender" required /> 
            <label for="male">Male</label>
            <input type="radio" id="female" value="Female" v-model="gender" required /> 
            <label for="female">Female</label>
            <input type="radio" id="other" value="Other" v-model="gender" required /> 
            <label for="other">Other</label>
          </div>
        </div>

        <div class="form-group">
          <label for="city">City</label>
          <select id="city" v-model="city" required>
            <option value="" disabled selected>Select your city</option>
            <option>Peshawar</option>
            <option>Mardan</option>
            <option>Abbottabad</option>
            <option>Swat</option>
            <option>Kohat</option>
            <option>Bannu</option>
            <option>Dera Ismail Khan</option>
          </select>
        </div>

        

        

        <button type="submit" class="register-button">Register</button>
      </form>

      <p class="registration-link">
        Want to register as a student? <router-link to="/StudentsRegistration">Register here</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
  name: "TeachersRegistration",
  setup() {
    const name = ref("");
    const email = ref("");
    const dob = ref("");
    const gender = ref("");
    const qualification = ref("");
    const city = ref("");
    const subjects = ref("");
    const experience = ref("");

    const handleRegistration = async () => {
      try {
        const response = await axios.post("https://api.example.com/teacher-register", {
          name: name.value,
          email: email.value,
          dob: dob.value,
          gender: gender.value,
          qualification: qualification.value,
          city: city.value,
          subjects: subjects.value,
          experience: experience.value,
        });

        if (response.data.success) {
          alert("Registration successful!");
        } else {
          alert("Registration failed: " + response.data.message);
        }
      } catch (error) {
        console.error("Error during registration:", error);
        alert("An error occurred. Please try again.");
      }
    };

    return {
      name,
      email,
      dob,
      gender,
      qualification,
      city,
      subjects,
      experience,
      handleRegistration,
    };
  },
};
</script>

<style scoped>
*{
  box-sizing: border-box;
  overflow: none;
}
.registration-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.registration-card {
  background: whitesmoke;
  border-radius: 12px;
  padding: 4.5rem;
  box-shadow: 0 5px 15px rgb(0 0 0 / 61%);
  text-align: center;
  max-width: 824px;
  width: 100%;
  padding-top: .5rem;
  padding-bottom: .5rem;
}

.registration-card h1 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #333;
}

.form-group {
  margin-bottom: 1.2rem;
  text-align: left;
}

.form-row {
  display: flex;
  gap: 1rem;
}

.form-row .form-group {
  flex: 1;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #555;
  font-size: 14px;
  padding-left: 8px;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 21px;
  font-size: .9rem;
  color: #333;
}

.gender-options input{
  width: 25px;
}

.gender-options label{
  display: inline-block;
}
.register-button {
  background: linear-gradient(40deg, blue, rgb(0, 225, 255));
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 15px;
  font-size: 14px;
  padding: 8px;
  margin-bottom: 4px;
  transition: background 0.3s ease;
}

.register-button:hover {
  background: linear-gradient(40deg, rgb(0, 225, 255), blue);
}

.registration-link {
  margin-top: 1rem;
  font-size: 0.9rem;
}
</style>
