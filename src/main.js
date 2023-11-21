import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './style.scss'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { magicMouse } from 'magicmouse.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 1000, // values from 0 to 3000, with step 50ms
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
});

const options = {
    // "cursorOuter": "circle-basic",
    "hoverEffect": "circle-move",
    "hoverItemMove": false,
    "defaultCursor": false,
    "outerWidth": 30,
    "outerHeight": 30
};
magicMouse(options);

library.add(fas, far, fab);

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')