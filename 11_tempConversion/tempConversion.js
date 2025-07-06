const convertToCelsius = function(fTemp) {
  const cTemp = ((fTemp - 32) * (5/9));
  const cTempStr = cTemp.toFixed(1);
  return parseFloat(cTempStr);
  
};

const convertToFahrenheit = function(cTemp) {
  const fTemp = (cTemp * (9/5) + 32);
  const fTempStr = fTemp.toFixed(1);
  return parseFloat(fTempStr);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
