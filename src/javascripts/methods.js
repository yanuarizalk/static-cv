import { locale } from 'date-fns/locale/en-US/index';
import { formatWithOptions } from 'date-fns/fp';

export default {
  toWhatsapp: (value) => `https://wa.me/${value}`,
  mailTo: (value) => `mailto:${value}`,
  toPlace: (value) => `https://www.google.com/maps/place/${value}`,
  toGithub: (value) => `https://github.com/${value}`,
  toDate: (fromDate, tillDate) => `${formatWithOptions({
    locale,
  }, 'yyyy MMM', fromDate)} - ${formatWithOptions({
    locale,
  }, 'yyyy MMM', tillDate)}`,
};
