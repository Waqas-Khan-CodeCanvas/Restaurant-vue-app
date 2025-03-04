<template>
  <div class="login-container">
    <div class="login-card">
      <h1>Login</h1>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Username</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Enter Username or Email"
            required
          />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter Password"
            required
          />
        </div>

        <button type="submit" class="login-button">Login</button>
        <a class="forgot-password" href="#">Forgot Password</a>
      </form>

      <div class="signup-box">
        <p class="signup-link">
          New user? <br><router-link to="/signup"><button class="Signup-now">Signup Now</button></router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
  name: "LoginComponent",
  setup() {
    const email = ref("");
    const password = ref("");

    const handleLogin = async () => {
      try {
        const response = await axios.post("https://api.example.com/login", {
          email: email.value,
          password: password.value,
        });

        if (response.data.success) {
          alert("Login successful!");
          // Redirect or perform post-login actions
        } else {
          alert("Login failed: " + response.data.message);
        }
      } catch (error) {
        
        alert("An error occurred during login. Please try again.");
      }
    };

    return {
      email,
      password,
      handleLogin,
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  overflow: none;
}
.login-container {
  display: flex;
  justify-content: center;
  padding: 1rem;
}

.login-card {
  background: whitesmoke;
  border-radius: 10px;
  padding: 2rem;
  padding-top: 0.7rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 330px;
  width: 100%;
}

.login-card h1 {
  font-size: 1.6rem;
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.6rem;
  text-align: left;
}

.form-group label {
  padding-left: 2px;
  display: block;
  margin-bottom: 0.2rem;
  color: #4e4e4e;
}

.form-group input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 15px;
  font-size: 13px;
  padding: 8px;
}

.login-button {
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

.login-button:hover {
  background: linear-gradient(40deg, rgb(0, 225, 255), blue);
}
.forgot-password {
  font-size: 14px;
  text-decoration: none;
  color: #6a11cb;
  font-weight: bold;
}
.signup-box{
  margin-top: 20px;
}

.Signup-now{
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
.signup-link {
  margin-top: 1rem;
  font-size: 0.9rem;
}

.signup-link a {
  color: #007bff;
  text-decoration: none;
}

.signup-link a:hover {
  text-decoration: underline;
}
</style>
