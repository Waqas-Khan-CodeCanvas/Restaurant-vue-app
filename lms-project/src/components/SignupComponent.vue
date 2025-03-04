<template>
    <div class="signup-container">
      <div class="signup-card">
        <h1>Sign Up</h1>
        <form @submit.prevent="handleSignUp">
          <div class="form-group">
            <label for="name">Full Name</label>
            <input
              type="text"
              id="name"
              v-model="name"
              placeholder="Enter your full name"
              required
            />
          </div>
  
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="Enter your email"
              required
            />
          </div>
  
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Enter your password"
              required
            />
          </div>
<!--   
          <div class="form-group">
            <label for="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              v-model="confirmPassword"
              placeholder="Confirm your password"
              required
            />
          </div> -->
  
          <button type="submit" class="signup-button">Sign Up</button>
        </form>
  
        <div class="login-box">
        <p class="login-link">
          Old user? <br><router-link to="/Login"><button class="login-now">Login Now</button></router-link>
        </p>
      </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import axios from "axios";
  
  export default {
    name: "SignupComponent",
    setup() {
      const name = ref("");
      const email = ref("");
      const password = ref("");
      const confirmPassword = ref("");
  
      const handleSignUp = async () => {
        if (password.value !== confirmPassword.value) {
          alert("Passwords do not match!");
          return;
        }
        
        try {
          const response = await axios.post("https://api.example.com/signup", {
            name: name.value,
            email: email.value,
            password: password.value,
          });
  
          if (response.data.success) {
            alert("Sign-up successful!");
            // Redirect or perform post-signup actions
          } else {
            alert("Sign-up failed: " + response.data.message);
          }
        } catch (error) {
          console.error("Error signing up:", error);
          alert("An error occurred during sign-up. Please try again.");
        }
      };
  
      return {
        name,
        email,
        password,
        confirmPassword,
        handleSignUp,
      };
    },
  };
  </script>
  
  <style scoped>
  * {
  box-sizing: border-box;
  overflow: none;
}
.signup-container {
  display: flex;
  justify-content: center;
  padding: 1rem;
}

.signup-card {
  background: whitesmoke;
  border-radius: 10px;
  padding: 2rem;
  padding-top: 0.7rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 330px;
  width: 100%;
}

.signup-card h1 {
  font-size: 1.6rem;
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: .7rem;
  text-align: left;
}

.form-group label {
  padding-left: 2px;
  display: block;
  margin-bottom: 0.2rem;
  color: #4e4e4e;
  font-size: 15px;
}

.form-group input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 15px;
  font-size: 13px;
  padding: 8px;
}

.signup-button {
  background: linear-gradient(40deg, blue, rgb(0, 225, 255));
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 15px;
  font-size: 14px;
  padding: 8px;
  margin-bottom: 4px;
  margin-top: 18px;
  transition: background 0.3s ease;
}

.signup-button:hover {
  background: linear-gradient(40deg, rgb(0, 225, 255), blue);
}
.forgot-password {
  font-size: 14px;
  text-decoration: none;
  color: #6a11cb;
  font-weight: bold;
}
.login-box{
  margin-top: 42px;
}

.login-now{
  cursor: pointer;
  width: 50%;
  border-radius: 15px;
  font-size: 14px;
  padding: 5px;
  margin-bottom: 4px;
  border: 1px solid black;
  background: white;
  margin-top: 5px;
}
.login-link {
  margin-top: 1rem;
  font-size: 0.9rem;
}

.login-link a {
  color: #007bff;
  text-decoration: none;
}

.login-link a:hover {
  text-decoration: underline;
}
</style>
  