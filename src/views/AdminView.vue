<template>
  <div v-if="isLogged" class="container-fluid min-vh-100 mt-5 p-0 bg-black mt-5">
    <div class="row justify-content-center align-items-center">
      <div class="col-12">
        <h1 class="text-center fw-bold">Area riservata</h1>
      </div>
    </div>
    <div class="row justify-content-center mt-5">
      <div class="col-11 col-md-6 col-lg-4">
        <form @submit.prevent="login" class="text-start">
          <div class="mb-3">
            <label for="inputName" class="form-label">Nome utente</label>
            <input v-model="username" type="text" class="form-control bg-dark text-white" id="inputName" required>
          </div>
          <div class="mb-3">
            <label for="inputEmail" class="form-label">Password</label>
            <input v-model="password" type="password" class="form-control bg-dark text-white" id="inputEmail" aria-describedby="emailHelp">
          </div>
          <button type="submit" class="btn btn-primary text-uppercase fw-bold text-white mb-5">Accedi</button>
        </form>
      </div>
    </div>
  </div>
  <div v-else class="container-fluid min-vh-100 mt-5 p-0 bg-black mt-5">
    <div class="row justify-content-center align-items-center">
      <div class="col-12">
        <h1 class="text-center fw-bold">Messaggi ricevuti</h1>
      </div>
    </div>
    <div class="row justify-content-center mt-5">
      <div class="col-11 col-md-6 col-lg-4">

      </div>
      <div class="text-center">
        <button @click="logout" type="button" class="btn btn-danger text-uppercase fw-bold text-white my-5">Logout</button>
      </div>
    </div>
  </div>
</template>
<script>
// import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
      isLogged: false
    }
  },
  methods: {
    login: function () {
      if (this.username === "nicolavitrani" && this.password === "enrica") {
        localStorage.setItem("admin", "true");
        alert("Benvenuto!")
        this.username = "";
        this.password = "";
        this.isLogged = true;
      } else {
        alert("Credenziali errate!");
        this.username = "";
        this.password = "";
      }
    },
    logout: function () {
      localStorage.removeItem("admin");
      this.isLogged = false;
    }
  }
}
</script>