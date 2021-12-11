export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const removeSpace = (value) => {
  return value.replace(/\s/g, "");
};

export const DateTimeConverter = (ISOdate) => {
  const dateFormat = new Date(ISOdate).toLocaleDateString();
  const timeFormat = new Date(ISOdate).toLocaleTimeString();
  return dateFormat + " " + timeFormat;
};

export const DateConverter = (ISOdate) => {
  const dateFormat = new Date(ISOdate).toLocaleDateString();
  return dateFormat;
};

// export const getRandomImage = () => {
//   const x = Math.floor(Math.random() * 10 + 1);
//   const image = require(`../images/login/${x}.jpg`);
//   return image.default;
// };

export const genRandomNumber = (limit) => {
  return Math.floor(Math.random() * limit + 1);
};
