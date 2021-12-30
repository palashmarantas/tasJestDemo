const englishCode = "en-US";
const spanishCode = "es-ES";
const estonianCode = "et";
const czechcode = "cs";

function getAboutUsLink(language) {
  switch (language.toLowerCase()) {
    case englishCode.toLowerCase():
      return '/about-us';
    case spanishCode.toLowerCase():
      return '/acerca-de';
    case estonianCode.toLowerCase():
      return '/meist';
    case czechCode.toLowerCase():
      return '/o nás';
  }
  return '';
}


module.exports = getAboutUsLink;