<template>
  <div class="container-fluid">
    <div style="min-height: 200px"></div>
    <div class="row justify-content-center align-items-center">
      <div class="col-12 col-lg-6 p-3 rounded-5 backdrop-filter">
        <div class="row align-items-center">
          <div class="d-none d-md-block col-4">
            <img src="/img/lamp.png" alt="Lampada da ufficio" class="img-fluid" style="min-height: 170px;">
          </div>
          <div class="col">
            <h1 class="fw-bold">Web Developer</h1>
            <p class="mt-3">Dedico la mia competenza e creatività a trasformare idee in realtà digitale, offrendo soluzioni web su misura</p>
            <a class="btn btn-lg btn-primary mt-4 me-2 text-uppercase text-white fw-bold" href="/contact">Contatti</a>
            <a class="btn btn-lg btn-secondary mt-4 text-uppercase text-white fw-bold" href="/work">Il mio lavoro</a>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg canvas-container min-vh-70 d-flex align-items-center">
        <Home3DComponent></Home3DComponent>
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
