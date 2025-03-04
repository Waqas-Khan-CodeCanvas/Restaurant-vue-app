
import { createRouter, createWebHistory } from "vue-router";
import LoginComponent from "@/components/LoginComponent.vue";
import SignupComponent from "@/components/SignupComponent.vue";
import StudentsRegistration from "@/components/studentsRegistration.vue";
import TeachersRegistration from "@/components/TeachersRegistration.vue";



const routes = [
  { path: "/login", name: "Login", component: LoginComponent },
  { path: "/signup", name: "Signup", component: SignupComponent },
  { path: "/StudentsRegistration", name: "StudentsRegistration", component: StudentsRegistration },
  { path: "/TeachersRegistration", name: "TeachersRegistration", component: TeachersRegistration },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

