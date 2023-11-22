<template>
  <div ref="container" id="container">
  </div>
</template>
<script>
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
export default {

  data() {
    return {

    }
  },
  mounted() {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Imposta il canvas con sfondo trasparente
    renderer.setSize(window.innerWidth, window.innerHeight)
    this.$refs.container.appendChild(renderer.domElement)

    const canvas = renderer.domElement;
    const container = this.$refs.container;
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.opacity = 0;
    canvas.style.transition = 'opacity 2s';

    container.appendChild(canvas);

    setTimeout(() => {
      canvas.style.opacity = 1;
    }, 400);

    const loader = new GLTFLoader()
    const modelPath = '/img/3d-obj/Planet.glb'

    loader.load(modelPath, (gltf) => {
      const model = gltf.scene
      scene.add(model)

      // // Luce direzionale
      // // Crea una luce direzionale bianca da sinistra
      // const directionalLightLeft = new THREE.DirectionalLight(0xffffff, 0.9); // Colore bianco e intensità
      // directionalLightLeft.position.set(-1, 0, 0); // Posizione sulla sinistra
      // scene.add(directionalLightLeft);

      // // Crea una luce direzionale BIANCA da destra
      const directionalLightRight = new THREE.DirectionalLight(0xffffff, 3.5);
      directionalLightRight.position.set(1, 0, 0); // Posizione sulla destra
      scene.add(directionalLightRight);

      // Luce ambientale
      const ambientLight = new THREE.AmbientLight(0xffffff, 5.8); // Colore e intensità
      scene.add(ambientLight);

      // Crea una luce spot bianca
      // const spotLight = new THREE.SpotLight(0xffffff, 0.5);
      // spotLight.position.set(1, 5, 0); // Posizione sopra l'oggetto
      // spotLight.target = model; // Direziona la luce verso il modello
      // scene.add(spotLight);

      if (window.innerWidth <= 768) { // Se la larghezza della viewport è inferiore o uguale a 768px (tablet e mobile)
        camera.position.z = 10;
        camera.position.x = 0
      } else { // Se la larghezza della viewport è superiore a 768px (desktop)
        camera.position.z = 5;
        camera.position.x = 0

        // // controllo con il mouse
        // const controls = new OrbitControls(camera, renderer.domElement);
        // // controls.minDistance = 3;
        // // controls.maxDistance = 5;
        // controls.update();
      }

      camera.position.y = 0

      const animateModelRotation = () => {
        // Ruota il modello di un piccolo angolo ad ogni frame
        model.rotation.y += 0.001

        renderer.render(scene, camera)
        requestAnimationFrame(animateModelRotation)
      }

      animateModelRotation()
    })
  },
  methods: {

  },
  watch: {
  }
}
</script>

<style scoped>
#container {
  background: transparent;
}
</style>