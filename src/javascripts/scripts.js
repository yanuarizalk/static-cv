import 'tailwindcss/tailwind.css';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faAt } from '@fortawesome/free-solid-svg-icons/faAt';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import Alpine from 'alpinejs';
import variables from './variables';

library.add(faEnvelope, faPhone, faAt, faGithub);
dom.watch();

window.Alpine = Alpine;

Alpine.data('variables', () => variables);

// eslint-disable-next-line no-console
console.log(`
  As u can see, i make this cv using tailwind & alpine as core program.\n
  I am trying to minify it as best as i can.

  I am only used custom css to add (.) point suffix inside list element LOL.

  Available @ https://github.com/yanuarizalk/static-cv
`);

Alpine.start();
