<template>
  <div class="container-fluid min-vh-100 mt-5 p-0">
    <div class="row justify-content-center align-items-center position-relative">
      <div class="col-12 canvas-container d-flex align-items-center">
        <About3DComponent></About3DComponent>
      </div>
      <div class="row position-absolute align-items-center justify-content-center mt-5">
        <div class="col-12 col-md-6 text-center mt-5">
          <h1 class="fw-bold">
            <span class="p-2">☕️ Chi sono</span>
          </h1>
          <p class="mt-5">
            Sono uno sviluppatore web full-stack con una solida esperienza nel settore, grazie alle opportunità che ho avuto di lavorare per aziende leader nel settore dei servizi professionali, dove ho acquisito competenze preziose e ho avuto l’opportunità di lavorare con clienti di grande importanza.
          </p>
          <p>
            Sono sempre alla ricerca di nuove sfide e opportunità per migliorare ulteriormente le mie competenze e la mia esperienza. Sono aperto a opportunità di lavoro in cui posso contribuire, imparare e crescere.
          </p>
          <div class="col-12 text-center my-5" data-aos="fade-down">
            <img src="/img/nicola-memoji.png" alt="Memoji di Nicola" class="img-fluid" style="height: 160px">
          </div>
          <div class="text-center">
            <router-link to="/contact"><button class="btn btn-lg btn-primary mt-4 me-2 text-uppercase text-white fw-bold magic-hover" data-aos="fade-right">Contatti</button></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid bg-black my-5 py-5">
    <div class="row justify-content-center">
      <div class="col-12 col-md-6 text-center mt-5">
        <h1 class="fw-bold" data-aos="fade-up">
          <span class="p-2">Le mie skills</span>
        </h1>
      </div>
    </div>
    <div class="row justify-content-center align-items-center my-5">
      <div class="col-12 col-md-6 px-3">
        <p data-aos="fade-down">
          Nel corso degli anni, ho sviluppato la conoscenza delle tecnologie backend come <strong class="text-secondary">PHP</strong>, <strong class="text-secondary">Laravel</strong> e <strong class="text-secondary">Java</strong>, così come delle tecnologie frontend come <strong class="text-secondary">Vue.js</strong> e <strong class="text-secondary">React.js</strong>. Questa combinazione di competenze mi permette di creare soluzioni complete e di alta qualità per i miei clienti.
        </p>
      </div>
    </div>
    <div class="row justify-content-center align-items-center my-5">
      <div class="col-6 col-md-4 col-lg-2 text-center my-5">
        <img src="/img/logo/php-icon.png" alt="Logo ufficiale di PHP" class="img-fluid" style="height: 90px">
      </div>
      <div class="col-6 col-md-4 col-lg-2 text-center my-5">
        <img src="/img/logo/laravel-icon.png" alt="Logo ufficiale di Laravel" class="img-fluid" style="height: 90px">
      </div>
      <div class="col-6 col-md-4 col-lg-2 text-center my-5">
        <img src="/img/logo/java-icon.webp" alt="Logo ufficiale di Java" class="img-fluid" style="height: 90px">
      </div>
      <div class="col-6 col-md-4 col-lg-2 text-center my-5">
        <img src="/img/logo/vuejs-icon.webp" alt="Logo ufficiale di VueJS" class="img-fluid" style="height: 90px">
      </div>
      <div class="col-6 col-md-4 col-lg-2 text-center my-5">
        <img src="/img/logo/react-icon.png" alt="Logo ufficiale di ReactJS" class="img-fluid" style="height: 90px">
      </div>
    </div>
  </div>
</template>
<script setup>
import About3DComponent from "@/components/About3DComponent.vue";
</script>

<style scoped>

</style>