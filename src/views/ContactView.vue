<template>
  <div class="container-fluid min-vh-100 mt-5 p-0">
    <div class="" style="margin-top: 250px"></div>
    <div class="row justify-content-center align-items-center position-relative mt-5">
      <div class="col-12 canvas-container d-flex align-items-center">
        <Contact3DComponent></Contact3DComponent>
      </div>
      <div class="row position-absolute align-items-center justify-content-center my-5 min-vh-100">
        <div class="col-12 col-md-10 col-lg-8 text-center mt-5">
          <h1 class="fw-bold">
            <span class="p-2">💬 Lasciami un messaggio</span>
          </h1>
          <p class="mt-5">
            Compila il form e ti risponderò il prima possibile
          </p>
          <div class="col-12 text-center my-5">
            <img src="/img/contact-memoji%20.PNG" alt="Memoji di Nicola" class="img-fluid" style="height: 160px">
          </div>
          <div class="col-12 col-md-8 col-lg-5 my-5 mx-auto">
            <form @submit.prevent="sendMessage" class="text-start">
              <div class="mb-3">
                <label for="inputName" class="form-label">Nome o azienda</label>
                <input type="text" class="form-control bg-dark text-white" id="inputName" required>
              </div>
              <div class="mb-3">
                <label for="inputEmail" class="form-label">Email</label>
                <input type="email" class="form-control bg-dark text-white" id="inputEmail" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text text-white">Non condividerò nè salvero la tua email</div>
              </div>
              <div class="mb-3">
                <label for="inputName" class="form-label">Messaggio</label>
                <textarea name="text" id="inputMessage" rows="10" class="form-control bg-dark text-white" required></textarea>
              </div>
              <div class="mb-5 form-check">
                <input type="checkbox" class="form-check-input" id="privacy" required>
                <label class="form-check-label" for="privacy">
                  Acconsento al trattamento dei dati
                </label>
              </div>
              <button type="submit" class="btn btn-primary text-uppercase fw-bold text-white mb-5">Invia</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid bg-black my-5 py-5">
    <div class="row justify-content-center">
      <div class="col-12 col-md-6 text-center mt-5">
        <h1 class="fw-bold" data-aos="fade-up">
          <span class="p-2">Altri contatti</span>
        </h1>
      </div>
    </div>
    <div class="row justify-content-center align-items-center my-5">
      <div class="col-12 col-md-6 px-3 text-center">
        <p data-aos="fade-down">
          Se preferisci un contatto più diretto, puoi mandarmi un'email o visitare il mio account <strong class="text-secondary">Linkedin</strong> sempre aggiornato
        </p>
      </div>
    </div>
    <div class="row justify-content-between align-items-center my-5">
      <div class="col-12 d-flex col-md-8 col-lg-5 text-center my-4 mx-auto">
        <div class="mx-auto">
          <a href="mailto:nicolavitrani93@gmail.com" class="text-secondary text-decoration-none">
            <span class="display-1 text-white">
              <font-awesome-icon :icon="['far', 'envelope']" bounce />
            </span>
            <div class="mt-2">Manda Email</div>
          </a>
        </div>
        <div class="mx-auto">
          <a href="https://www.linkedin.com/in/nicola-vitrani-205a2881/" target="_blank" class="text-secondary text-decoration-none">
            <span class="display-1 text-white">
              <font-awesome-icon :icon="['fab', 'linkedin']" beat />
            </span>
            <div class="mt-2">Visita Linkedin</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Contact3DComponent from "@/components/Contact3DComponent.vue";
</script>
<script>
import axios from "axios";

export default {
  mounted() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  data: () => ({
    name: "",
    email: "",
    message: ""
  }),
  methods: {
    sendMessage: function () {
      window.Swal.fire({
        backdrop: `
          rgba(0,0,0,0.8)
        `,
        background: "black",
        customClass: {
          title: "text-white"
        },
        title: "Conferma invio messaggio",
        text: "Sei sicuro di voler mandare il messaggio?",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#54a0c2",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si",
        cancelButtonText: "No"
      }).then(action => {
        if (action.isConfirmed) {
          let postData = {
            name: document.getElementById('inputName').value,
            email: document.getElementById('inputEmail').value,
            message: document.getElementById('inputMessage').value,
            date: new Date().toISOString()
          }
          axios.post('https://nicolavitrani-a4783-default-rtdb.europe-west1.firebasedatabase.app/messages.json', postData)
            .then(response => {
              console.log(response.data);

              window.Swal.fire({
                backdrop: `
                  rgba(0,0,0,0.8)
                `,
                background: "black",
                customClass: {
                  title: "text-white"
                },
                title: "Grazie",
                text: "Ti risponderò a breve",
                icon: "success",
                showCancelButton: false,
                confirmButtonColor: "#54a0c2",
                cancelButtonColor: "#d33",
                confirmButtonText: "OK"
              });

              this.name = "";
              this.email = "";
              this.message = "";

              document.getElementById('inputName').value = '';
              document.getElementById('inputEmail').value = '';
              document.getElementById('inputMessage').value = '';
            })
            .catch((err) => {
              console.log("Error sending message", err);
              window.Swal.fire({
                backdrop: `
                  rgba(0,0,0,0.8)
                `,
                background: "black",
                customClass: {
                  title: "text-white"
                },
                title: "Ops!",
                text: "Errore nell'invio del messaggio. Contattami via email",
                icon: "error",
                showCancelButton: false,
                confirmButtonColor: "#54a0c2",
                cancelButtonColor: "#d33",
                confirmButtonText: "OK"
              });
            })
        }
      });
    }
  }
}
</script>