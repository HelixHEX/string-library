const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const allCaps = (str) => str.toUpperCase();

const capitalizeWords = (str) => {
  str
    .split(' ')
    .map((word, index) => {
      if (index !== 0) {
        if (
          word !== 'the'
          && word !== 'in'
          && word !== 'a'
          && word !== 'an'
          && word !== 'and'
          && word !== 'but'
          && word !== 'for'
          && word !== 'at'
          && word !== 'but'
          && word !== 'from'
        ) {
          return capitalize(word);
        }
        return word;
      }
      return capitalize(word);
    })
    .join(' ');
};

const removeExtraSpaces = (str) => str
  .trim()
  .split(' ')
  .filter((w) => w)
  .join(' ');

const kebobCase = (str, separatingChar) => removeExtraSpaces(str)
  .split(' ')
  .join(separatingChar)
  .toLowerCase()
  // eslint-disable-next-line no-useless-escape
  .replace(/[&\/\\#^+()$~%.'':*?<>{}!@]/g, '');

const snakeCase = (str) => kebobCase(str, '_');

const camelCase = (str) => str
  .split(' ')
  .map((word, index) => (index !== 0 ? capitalize(word) : word))
  .join('');

const shift = (str, num = 1) => {
  const temp = str.substr(0, num);
  return str.slice(num) + temp;
};

const makeHashTag = (str) => str
  .split(' ')
  .sort((a, b) => b.length - a.length)
  .slice(0, 3)
  .map((word) => `#${capitalize(`${word}`)}`);

const isEmpty = (str) => str.replace(/\s/g, '').length === 0;

// module.exports = {
//   capitalize,
//   allCaps,
//   capitalizeWords,
//   removeExtraSpaces,
//   kebobCase,
//   snakeCase,
//   camelCase,
//   shift,
//   makeHashTag,
//   isEmpty,
// };

module.exports.capitalize = capitalize;
module.exports.allCaps = allCaps;
module.exports.capitalizeWords = capitalizeWords;
module.exports.removeExtraSpaces = removeExtraSpaces;
module.exports.kebobCase = kebobCase;
module.exports.snakeCase = snakeCase;
module.exports.camelCase = camelCase;
module.exports.shift = shift;
module.exports.makeHashTag = makeHashTag;
module.exports.isEmpty = isEmpty;
// module.exports.default = {
//   capitalize,
//   allCaps,
//   capitalizeWords,
//   removeExtraSpaces,
//   kebobCase,
//   snakeCase,
//   camelCase,
//   shift,
//   makeHashTag,
//   isEmpty
// }