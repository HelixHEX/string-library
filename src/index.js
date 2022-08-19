const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const allCaps = (str) => {
  return str.toUpperCase();
};

const capitalizeWords = (str) => {
  return str.split(" ").map((word, index) => {
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
  }).join(" ")
};

console.log(capitalizeWords("in in whats up with you in the"));
