const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const allCaps = (str) => {
  return str.toUpperCase();
};

const capitalizeWords = (str) => {
  return str
    .split(" ")
    .map((word, index) => {
      if (index !== 0) {
        if (
          word !== "the" &&
          word !== "in" &&
          word !== "a" &&
          word !== "an" &&
          word !== "and" &&
          word !== "but" &&
          word !== "for" &&
          word !== "at" &&
          word !== "but" &&
          word !== "from"
        ) {
          return capitalize(word);
        } else return word;
      } else {
        return capitalize(word);
      }
    })
    .join(" ");
};

const removeExtraSpaces = (str) => {
  return str
    .trim()
    .split(" ")
    .filter((w) => w)
    .join(" ");
};

const kebobCase = (str, separatingChar) => {
  return removeExtraSpaces(str)
    .split(" ")
    .join(separatingChar)
    .toLowerCase()
    .replace(/[&\/\\#^+()$~%.'":*?<>{}!@]/g, "");
};

const snakeCase = (str) => {
  return kebobCase(str, "_");
};

const camelCase = (str) => {
  return str
    .split(" ")
    .map((word, index) => (index !== 0 ? capitalize(word) : word))
    .join("");
};

const shift = (str, num = 1) => {
  let temp = str.substr(0, num);
  return str.slice(num) + temp;
};

const makeHashTag = (str) => {
  return str
    .split(" ")
    .sort((a, b) => b.length - a.length)
    .slice(0, 3)
    .map((word) => {
      return "#" + capitalize(`${word}`);
    });
};

const isEmpty = (str) => {
  return str.replace(/\s/g, "").length === 0;
};

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
}

