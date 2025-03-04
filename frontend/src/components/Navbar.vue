<template>
    <nav class="navbar">
      <div class="nav-container">
        <div class="logo">MyBrand</div>
        <ul :class="['nav-links', { 'open': isOpen }]">
          <li><router-link to="/" class="link">Home</router-link></li>
          <li><router-link to="/StudentsRegistration" class="link">Enrollment</router-link></li>
          <li><router-link to="/login" class="link">Login</router-link></li>
        </ul>
        <div class="hamburger" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  </template>
  
  <script >
  
  import { ref } from 'vue';
  
  export default{
    name:"NavbarComponent",
    data(){
    },
    methods:{
        toggleMenu(){
            let isOpen = ref(false);   
            isOpen.value = !isOpen.value;
        }
    }
  }
  
  </script>
  
  <style scoped>
  /* Navbar Styles */
  .navbar {
    background-color: rgb(28, 80, 127);
    color: rgb(196, 144, 22);
    padding: 15px 20px;
  }
  
  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: auto;
  }
  
  .logo {
    font-size: 24px;
    font-weight: bold;
  }
  
  /* Navigation Links */
  .nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
  }
  
  .nav-links li .link {
    color: white;
    text-decoration: none;
    font-size: 18px;
  }
  
  .nav-links li .link:hover {
    color: #f4a261;
  }
  
  /* Hamburger Menu */
  .hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
  }
  
  .hamburger span {
    background: white;
    height: 3px;
    width: 25px;
    margin: 4px 0;
    transition: 0.3s;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .nav-links {
      position: absolute;
      top: 60px;
      left: 0;
      background: #222;
      width: 100%;
      flex-direction: column;
      text-align: center;
      transform: translateY(-100%);
      transition: transform 0.3s ease-in-out;
    }
  
    .nav-links.open {
      transform: translateY(0);
    }
  
    .hamburger {
      display: flex;
    }
  }
  </style>
  