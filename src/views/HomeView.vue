<template>
  <div class="container-fluid p-0">
    <div class="row justify-content-center align-items-center">
      <div class="col-12 canvas-container d-flex align-items-center">
        <Home3DComponent></Home3DComponent>
      </div>
      <div class="row position-absolute align-items-center justify-content-center">
        <div class="col-12 col-lg-6 p-3 rounded-5">
          <div class="row align-items-center">
            <!--          <div class="d-none d-md-block col-4">-->
            <!--            <img src="/img/lamp.png" alt="Lampada da ufficio" class="img-fluid" style="min-height: 170px;">-->
            <!--          </div>-->
            <div class="col text-center">
              <h1 class="fw-bold" data-aos="fade-down">🚀 Web Developer</h1>
              <p class="mt-3" data-aos="fade-up">Dedico la mia competenza e creatività a trasformare idee in realtà digitale, <br>offrendo soluzioni web su misura</p>
              <a class="btn btn-lg btn-primary mt-4 me-2 text-uppercase text-white fw-bold magic-hover" data-aos="fade-right" href="/contact">Contatti</a>
              <a class="btn btn-lg btn-secondary mt-4 text-uppercase text-white fw-bold magic-hover" data-aos="fade-left" href="/work">Il mio lavoro</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Home3DComponent from '@/components/Home3DComponent.vue'
export default {
  name: 'HomeView',
  components: {
    'Home3DComponent' : Home3DComponent
  }
}
</script>

<style scoped>
  /* .musthead {
    position: absolute;
    z-index: 1;
  } */

  .backdrop-filter {
    backdrop-filter: blur(8px);
  }
</style>
