// import { locale } from 'date-fns/locale/en-US/index';
import format from 'date-fns/fp/format';

export default {
  toWhatsapp: (value) => `https://wa.me/${value}`,
  mailTo: (value) => `mailto:${value}`,
  toPlace: (value) => `https://www.google.com/maps/place/${value}`,
  toGithub: (value) => `https://github.com/${value}`,
  toDate: (fromDate, tillDate) => `${format('yyyy MMM', fromDate)} - ${format('yyyy MMM', tillDate)}`,
};
