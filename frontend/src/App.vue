<template>
 <main>
   <!-- <HomeComponent/> -->
   <NavbarComponent/> 
  <router-view></router-view>
  <!-- <LoginComponent/> 
  <SignUpComponent/>
  <ContactUsComponent/>
  <TeacherComponent/> -->
 </main>
</template>

<script>
// import ContactUsComponent from './components/ContactUsComponent.vue';
// import HomeComponent from './components/HomeComponent.vue';
// import LoginComponent from './components/LoginComponent.vue';
import NavbarComponent from './components/Navbar.vue';
// import SignUpComponent from './components/SignUpComponent.vue';
// import TeacherComponent from './components/TeacherComponent.vue';


export default {
  name: 'App',
  components: {
    // HomeComponent,
    NavbarComponent,
    // LoginComponent,
    // SignUpComponent,
    // ContactUsComponent,
    // TeacherComponent,

  }
}
</script>

<style>
main{
  font-family: sans-serif;
}
</style>

