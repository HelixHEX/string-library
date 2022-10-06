const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const allCaps = (str: string) => str.toUpperCase();

const capitalizeWords = (str: string) => {
  return str
    .split(' ')
    .map((word, index) => {
      if (index !== 0) {
        if (
          word !== 'the' &&
          word !== 'in' &&
          word !== 'a' &&
          word !== 'an' &&
          word !== 'and' &&
          word !== 'but' &&
          word !== 'for' &&
          word !== 'at' &&
          word !== 'but' &&
          word !== 'from'
        ) {
          return capitalize(word);
        }
        return word;
      }
      return capitalize(word);
    })
    .join(' ');
};

const removeExtraSpaces = (str: string) =>
  str
    .trim()
    .split(' ')
    .filter(w => w)
    .join(' ');

const kebobCase = (str: string, separatingChar: string) =>
  removeExtraSpaces(str)
    .split(' ')
    .join(separatingChar)
    .toLowerCase()
    // eslint-disable-next-line no-useless-escape
    .replace(/[&\/\\#^+()$~%.'':*?<>{}!@]/g, '');

const snakeCase = (str: string) => kebobCase(str, '_');

const camelCase = (str: string) =>
  str
    .split(' ')
    .map((word, index) => (index !== 0 ? capitalize(word) : word))
    .join('');

const shift = (str: string, num = 1) => {
  const temp = str.substr(0, num);
  return str.slice(num) + temp;
};

const makeHashTag = (str: string) =>
  str
    .split(' ')
    .sort((a, b) => b.length - a.length)
    .slice(0, 3)
    .map(word => `#${capitalize(`${word}`)}`);

const isEmpty = (str: string) => str.replace(/\s/g, '').length === 0;

export {
  capitalize,
  allCaps,
  capitalizeWords,
  removeExtraSpaces,
  kebobCase,
  snakeCase,
  camelCase,
  shift,
  makeHashTag,
  isEmpty,
};