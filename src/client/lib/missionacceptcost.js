export default function(countryreputation, countryobscurity) {
  return [100 - countryreputation, Math.round(3 / countryobscurity)];
}
