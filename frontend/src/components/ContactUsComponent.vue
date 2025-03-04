<template>
    <div class="contact-container">
      <div class="contact-card">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Fill out the form below to get in touch.</p>
        
        <form @submit.prevent="handleContact">
          <div class="form-group">
            <label for="name">Full Name</label>
            <input type="text" id="name" v-model="name" placeholder="Enter your name" required />
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" placeholder="Enter your email" required />
          </div>
          
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="message" placeholder="Enter your message" required></textarea>
          </div>
          
          <button type="submit" class="contact-button">Send Message</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import axios from "axios";
  
  export default {
    name: "ContactUsComponent",
    setup() {
      const name = ref("");
      const email = ref("");
      const message = ref("");
  
      const handleContact = async () => {
        try {
          const response = await axios.post("https://api.example.com/contact", {
            name: name.value,
            email: email.value,
            message: message.value,
          });
  
          if (response.data.success) {
            alert("Message sent successfully!");
          } else {
            alert("Failed to send message: " + response.data.message);
          }
        } catch (error) {
          console.error("Error sending message:", error);
          alert("An error occurred. Please try again later.");
        }
      };
  
      return {
        name,
        email,
        message,
        handleContact,
      };
    },
  };
  </script>
  
  <style scoped>
  .contact-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(to right, #6a11cb, #2575fc);
    padding: 1rem;
  }
  
  .contact-card {
    background: white;
    border-radius: 12px;
    padding: 2.5rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    text-align: center;
    max-width: 450px;
    width: 100%;
  }
  
  .contact-card h1 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #333;
  }
  
  .contact-card p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 1.5rem;
  }
  
  .form-group {
    margin-bottom: 1.2rem;
    text-align: left;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #555;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 0.6rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1rem;
  }
  
  .form-group textarea {
    height: 120px;
    resize: none;
  }
  
  .contact-button {
    background-color: #007bff;
    color: white;
    padding: 0.7rem 1.2rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    width: 100%;
    font-size: 1rem;
    transition: 0.3s ease;
  }
  
  .contact-button:hover {
    background-color: #0056b3;
  }
  </style>
  