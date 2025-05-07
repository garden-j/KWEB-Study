const PI = 3.14159265358;

const round = (number) => Math.round(number * 100) / 100;

const getCircleArea = (radius) => round(PI * radius ** 2);

module.exports = {
  getCircleArea,
};
