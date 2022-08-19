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

const kebobCase = (str) => {
  return removeExtraSpaces(str)
    .split(" ")
    .join("-")
    .toLowerCase()
    .replace(/[&\/\\#^+()$~%.'":*?<>{}!@]/g, "");
};

