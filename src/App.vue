<template>
  <div class="container-fluid p-0">
    <div class="row align-items-center min-vh-100">
      <div class="col-12">
        <div v-show="fixNavbar" style="height: 122px"></div>
        <nav id="navbar" class="navbar navbar-expand-lg p-3" :class="{ 'navbar-light' : isLight, 'navbar-dark' : !isLight, 'fixed-top' : fixNavbar, 'hided' : hideNavbar }">
          <div class="container-fluid">
            <router-link @click="closeNavbar" class="navbar-brand" to="/">
              <img src="/img/logo/logo.png" alt="Logo ufficiale di Nicola Vitrani" class="img-fluid p-2" style="height: 80px"><span class="text-uppercase fw-bold ms-2">Nicola Vitrani</span>
            </router-link>
            <button id="navbar-toggler" class="navbar-toggler border-0 rounded-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="toggler-icon top-bar"></span>
              <span class="toggler-icon middle-bar"></span>
              <span class="toggler-icon bottom-bar"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <router-link @click="closeNavbar" class="nav-link text-uppercase text-center" active-class="text-primary" aria-current="page" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                  <router-link @click="closeNavbar" class="nav-link text-uppercase text-center" active-class="text-primary" aria-current="page" to="/about">Chi sono</router-link>
                </li>
                <li class="nav-item">
                  <router-link @click="closeNavbar" class="nav-link text-uppercase text-center" active-class="text-primary" aria-current="page" to="/work">Esperienze</router-link>
                </li>
                <li class="nav-item me-lg-4">
                  <a class="nav-link text-uppercase text-center" aria-current="page">Contatti</a>
                </li>
                <li v-on:click="setLight" class="nav-item my-auto d-none" style="cursor: pointer">
                  <div class="text-center my-auto fs-4">
                    <font-awesome-icon :icon="['far', 'lightbulb']" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <router-view/>
        <button @click="scrollToTop" id="scrollButton" class="btn btn-lg btn-secondary" :class="{'disappear' : !showScrollButton}"><font-awesome-icon :icon="['fas', 'caret-up']" /></button>
        <footer class="my-5">
          <div class="container">
            <div class="row justify-content-center align-items-center">
              <div class="col-12 text-center text-gray">
                © Nicola Vitrani | 2023 | 2.0.1
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
export default {

  data() {
    return {
      isLight: false,
      showScrollButton: false,
      fixNavbar: false,
      hideNavbar: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.checkScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.checkScroll);
  },
  methods: {
    setLight: function () {
      this.isLight = true;
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.body.style.transition = "0.4s";

      const navbar = document.getElementById("navbar");
      if (navbar) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
        navbar.style.backdropFilter = 'blur(7px)';
      } else {
        console.log("navbar not found");
      }
    },
    checkScroll() {
      this.showScrollButton = window.pageYOffset > 200;
      this.fixNavbar = window.pageYOffset > 200;
      this.hideNavbar = window.pageYOffset < 220 && window.pageYOffset > 122;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    closeNavbar() {
      // Chiudi il menu della navbar se è aperto
      const navbarToggler = document.querySelector('.navbar-toggler');
      this.scrollToTop();
      if (navbarToggler.classList.contains('collapsed')) {
        return; // Il menu è già chiuso
      }
      navbarToggler.click(); // Simula un clic sul pulsante del menu
    },
  },
  watch: {
  }
}
</script>

<style scoped>
@keyframes bounce {
  0% { transform: translateY(100vh); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
}

@keyframes disappear {
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(100vh); }
}

#scrollButton {
  position: fixed;
  bottom: 20px;
  right: 20px;
  animation: bounce 1s ease;
  transition: 0.4s;
}

#scrollButton:hover {
  transform: scale(125%);
  transition: 0.4s;
}

#scrollButton.disappear {
  animation: disappear 1s ease forwards;
}
</style>