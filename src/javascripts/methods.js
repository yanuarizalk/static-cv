module.exports = {
  toWhatsapp: (value) => `https://wa.me/${value}`,
  mailTo: (value) => `mailto:${value}`,
  toPlace: (value) => `https://www.google.com/maps/place/${value}`,
  toGithub: (value) => `https://github.com/${value}`,
};
