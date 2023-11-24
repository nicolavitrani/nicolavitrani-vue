<template>
  <div v-if="loading" class="container">
    <div class="row min-vh-100 align-items-center justify-content-center">
      <div class="col-10 col-md-6 col-lg-4 text-center">
        <div class="mb-3 fs-1">
          <font-awesome-icon :icon="['fas', 'arrows-spin']" spin />
        </div>
        <div class="progress-bar" :style="{ width: progress + '%' }"></div>
        <div class="mt-3 fw-bold fs-1">
          {{ progress }} %
        </div>
      </div>
    </div>
  </div>
  <div v-else class="container-fluid p-0">
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
                <router-link @click="closeNavbar" class="nav-link text-uppercase text-center" active-class="text-secondary" aria-current="page" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link @click="closeNavbar" class="nav-link text-uppercase text-center" active-class="text-secondary" aria-current="page" to="/about">Chi sono</router-link>
              </li>
              <li class="nav-item">
                <router-link @click="closeNavbar" class="nav-link text-uppercase text-center" active-class="text-secondary" aria-current="page" to="/work">Esperienze</router-link>
              </li>
              <li class="nav-item">
                <router-link @click="closeNavbar" class="nav-link text-uppercase text-center" active-class="text-secondary" aria-current="page" to="/contact">Contatti</router-link>
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
      <button @click="scrollToTop" id="scrollButton" class="btn btn-lg btn-secondary text-white fw-bold rounded-5" :class="{'disappear' : !showScrollButton}"><font-awesome-icon :icon="['fas', 'arrow-up']" beat /></button>
      <footer class="my-5">
        <div class="container">
          <div class="row justify-content-center align-items-center">
            <div class="col-12 text-center text-gray">
              <div class="mb-2">© 2023 | Nicola Vitrani | nicolavitrani93@gmail.com</div>
              <span class="mt-4">
                <router-link @click="closeNavbar" aria-current="page" to="/admin" class="text-gray"><font-awesome-icon :icon="['fas', 'fingerprint']" /></router-link>
              </span>
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
      hideNavbar: false,
      loading: true,
      progress: 0
    }
  },
  mounted() {
    this.checkIfCleanCache();
    this.splashScreen();
    window.addEventListener('scroll', this.checkScroll);
    document.body.style.transform = "scale(0.99)"
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.checkScroll);
  },
  methods: {
    splashScreen: function () {
      let intervalId = setInterval(() => {
        if (this.progress >= 100) {
          clearInterval(intervalId);
          this.loading = false;
        } else {
          this.progress += 1;
        }
      }, 15);
    },
    checkIfCleanCache: function () {
      if ('caches' in window) {
        window.caches.keys().then(keys => {
          if (keys.length > 0) {
            keys.forEach(key => {
              window.caches.delete(key)
            })
            window.location.reload();
            // window.location.href = window.location.href.split('?')[0] + '?v=' + new Date().getTime();
          } else {
            console.log("No cache to clean.");
          }
        });
      }
    },
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

.progress-bar {
  height: 2px;
  background-color: white;
  transition: width 0.025s ease-in-out;
}
</style>