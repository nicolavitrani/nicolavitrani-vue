<template>
  <div v-if="!isLogged" class="container-fluid min-vh-100 mt-5 p-0 bg-black mt-5">
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
    <div class="row justify-content-center align-items-center mb-5">
      <div class="col-12">
        <h1 class="text-center fw-bold">Messaggi ricevuti</h1>
      </div>
    </div>
    <div v-show="messages.length > 0 && !loading" v-for="message in messages" :key="message.id" class="row justify-content-center">
      <div class="col-11 col-md-6 col-lg-4 border-top border-bottom border-gray p-2">
        <div class="d-flex justify-content-between">
          <strong>{{ message.name }}<br><small class="text-gray">{{ message.email }}</small></strong><small>{{ message.date }}</small>
        </div>
        <div class="d-flex justify-content-between mt-4">
          <span>{{ message.message }}</span>
          <span @click="deleteMessage(message.id)" class="fs-5" style="cursor: pointer"><font-awesome-icon :icon="['far', 'trash-can']" /></span>
        </div>
      </div>
    </div>
    <div v-show="loading" class="row justify-content-center">
      <div class="col-12 text-center my-5">
        <span class="me-2">Caricamento messaggi in corso</span>
        <font-awesome-icon :icon="['fas', 'arrows-spin']" spin />
      </div>
    </div>
    <div v-show="messages.length === 0" class="row justify-content-center">
      <div class="col-12 text-center">
        Nessun messaggio ricevuto
      </div>
    </div>
    <div class="text-center">
      <button @click="logout" type="button" class="btn btn-danger text-uppercase fw-bold text-white my-5">Logout</button>
    </div>
  </div>
</template>
<script>
// import axios from "axios";

import axios from "axios";

export default {
  mounted() {
    this.checkIfLogged();
  },
  data() {
    return {
      username: "",
      password: "",
      isLogged: false,
      messages: [],
      loading: false
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
        this.getAllMessages();
      } else {
        alert("Credenziali errate!");
        this.username = "";
        this.password = "";
      }
    },
    logout: function () {
      localStorage.removeItem("admin");
      this.isLogged = false;
    },
    getAllMessages: function () {
      this.loading = true;
      axios.get('https://nicolavitrani-a4783-default-rtdb.europe-west1.firebasedatabase.app/messages.json').then(response => {
        console.log("response messages", response);

        if (response.data) {
          let messagesArray = Object.entries(response.data).map(([id, messageData]) => {
            // Aggiungi l'ID del messaggio ai dati del messaggio
            messageData.id = id;
            return messageData;
          });

          // Ordina i messaggi in modo che quelli più recenti vengano prima
          messagesArray.sort((a, b) => new Date(b.date) - new Date(a.date));

          // Converte la data in un formato leggibile
          messagesArray.forEach(message => {
            let date = new Date(message.date);
            message.date = date.toLocaleString();
          });

          // Assegna l'array ordinato a this.messages
          this.messages = messagesArray;
          this.loading = false;
        }
      }).catch(err => {
        console.log("Errore nella richiesta", err);
        this.loading = false;
      })
    },
    checkIfLogged: function () {
      let isLogged = localStorage.getItem("admin");
      isLogged ? this.isLogged = true : this.isLogged = false

      if (isLogged) {
        this.getAllMessages();
      }
    },
    deleteMessage: function (messageId) {
      if (confirm("Eliminare il messaggio?")) {
        axios.delete(`https://nicolavitrani-a4783-default-rtdb.europe-west1.firebasedatabase.app/messages/${messageId}.json`).then(() => {
          this.loading = true;
          this.getAllMessages();
          this.loading = false;
        }).catch(() => {
          alert("Impossibile eliminare il messaggio.")
        })
      }
    }
  }
}
</script>