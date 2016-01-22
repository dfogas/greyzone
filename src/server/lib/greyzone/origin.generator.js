// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// simple random generator of world's countries
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const countries = [
  'China',
  'China',
  'China',
  'Brazil',
  'India',
  'France',
  'Poland',
  'Russia',
  'England',
  'Ireland',
  'Morroco',
  'Argentina',
  'Mexico',
  'USA',
  'USA',
  'USA',
  'Canada',
  'Egypt',
  'J.A.R.',
  'Australia',
  'Japan',
  'Japan',
  'Thailand',
  'Nigeria',
  'Italy',
  'Turkey',
  'Greece',
  'Iran',
  'Izrael',
  'Indonesia',
  'Pakistan',
  'Spain'
];

function generateCountry() {
  return countries[Math.round(Math.random() * (countries.length - 1))];
}

export default generateCountry;
