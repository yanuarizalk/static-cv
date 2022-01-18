import 'tailwindcss/tailwind.css';
import '@fortawesome/fontawesome-free/js/all';
import Alpine from 'alpinejs';
import axios from 'axios';
import variables from './variables';

window.Alpine = Alpine;
window.axios = axios;

/* Object.keys(variables).forEach((key) => {
  Alpine.data(key, () => (variables[key]));
}); */
Alpine.data('variables', () => variables);

// eslint-disable-next-line no-console
console.log(`
  As u can see, i make this cv using tailwind & alpine as core program.\n
`);


/* axios.get('/partials/head.html').then((response) => {
  console.log(response);
});
 */

Alpine.start();
