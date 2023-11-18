<template>
  <div class="container-fluid">
    <div class="row justify-content-center align-items-center position-relative">
      <div class="col-12 canvas-container d-flex align-items-center">
        <Home3DComponent></Home3DComponent>
      </div>
      <div class="row position-absolute align-items-center justify-content-center">
        <div class="col-12 text-center">
          <div class="col-12">
            <h1 class="fw-bold" data-aos="fade-down">
              <span class="p-2">🎯 Le mie esperienze</span>
            </h1>
          </div>
          <div class="col-12 col-md-8 col-lg-6 mt-5 mx-auto" data-aos="fade-up">
            <p>
              Nel corso della mia carriera, ho avuto l’opportunità di lavorare in diversi settori. Ho iniziato come sviluppatore <strong class="text-primary">freelance</strong>, un ruolo che mi ha permesso di affinare le mie competenze tecniche e di lavorare su una varietà di progetti.
            </p>
            <p>
              Successivamente, ho lavorato nel settore dell’<strong class="text-primary">automazione industriale</strong>, dove ho potuto applicare le mie competenze in un contesto diverso e stimolante. Attualmente, lavoro come ingegnere del software in una delle aziende leader nel settore dei <strong class="text-primary">servizi professionali</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid my-5 py-5 bg-black">
    <div class="col-12 text-center my-5">
      <div class="row align-items-center justify-content-between mb-5">
        <div class="col-12 col-md-4 text-center">
          <img src="/img/logo/deloitte-logo.png" alt="Logo ufficiale di Deloitte" class="img-fluid" style="height: 120px">
        </div>
        <div class="col-12 col-md-7 text-start px-3" data-aos="fade-down">
          <h2 class="fw-bold mb-2">Deloitte</h2>
          <small class="text-gray">da Settembre 2023</small>
          <div class="col-12 col-md-10">
            <p class="mt-4">
              Sto avendo l’opportunità di lavorare su una serie di progetti stimolanti e innovativi. La mia esperienza mi ha permesso di affinare le mie competenze tecniche e di problem solving, lavorando con un team di professionisti altamente qualificati.
            </p>
            <p>
              Ho avuto l’opportunità di contribuire a soluzioni software complesse, migliorando la mia comprensione dei processi aziendali e delle tecnologie emergenti.
            </p>
            <p>
              Questa esperienza mi ha fornito una solida base per la mia carriera e sono entusiasta di portare queste competenze e conoscenze nel mio prossimo ruolo.
            </p>
          </div>
        </div>
      </div>
      <div class="row align-items-center justify-content-between">
        <div class="col-12 col-md-4 text-center">
          <img src="/img/logo/tekna-logo.png" alt="Logo ufficiale di Tekna" class="img-fluid" style="height: 200px">
        </div>
        <div class="col-12 col-md-7 text-start px-3" data-aos="fade-up">
          <h2 class="fw-bold mb-2">Tekna Automation & Energy</h2>
          <small class="text-gray">da Luglio 2021 ad Agosto 2023</small>
          <div class="col-12 col-md-10">
            <p class="mt-4">
              Ho progettato e sviluppato una piattaforma web per la gestione di un robot utilizzato negli stabilimenti di produzione di pneumatici in tutto il mondo. La piattaforma, progettata per essere responsive e user-friendly, utilizza PHP con il framework Laravel per il backend e JavaScript con il framework Vue.js per il frontend. I dati sono gestiti attraverso un database relazionale MySQL.
            </p>
            <p>
              Inoltre, ho sviluppato software di visione artificiale per la ricerca di difetti sugli pneumatici in fase di post-produzione, utilizzando la tecnologia Halcon (MvTech).
            </p>
            <p>
              Ho anche avuto l’opportunità di lavorare sulla manutenzione di software scritti in diversi linguaggi e tecnologie, tra cui .NET. Questa esperienza mi ha permesso di acquisire una vasta gamma di competenze e di approfondire la mia comprensione delle moderne tecnologie di sviluppo web.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">
      <a class="btn btn-primary mt-3 fw-bold text-uppercase text-white" href="/contact">Contatti</a>
    </div>
  </div>
</template>
<script setup>
import Home3DComponent from "@/components/Home3DComponent.vue";
</script>

<style scoped>

</style>