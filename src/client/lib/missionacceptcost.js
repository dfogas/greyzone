export default function(countryreputation, countryobscurity) {
  return [100 - countryreputation, 10/countryobscurity];
}
