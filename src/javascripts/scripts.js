/* eslint-disable no-console */
import 'tailwindcss/tailwind.css';
import Alpine from 'alpinejs';
import axios from 'axios';
import variables from '../../config/variables';

window.Alpine = Alpine;
window.axios = axios;

/* Object.keys(variables).forEach((key) => {
  Alpine.data(key, () => (variables[key]));
}); */
Alpine.data('variables', () => variables);

/* axios.get('/partials/head.html').then((response) => {
  console.log(response);
});
 */

Alpine.start();
