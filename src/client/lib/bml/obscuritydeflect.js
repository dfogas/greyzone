/* ImmutableMap(Player) -> boolean(mission deflected) */

const obscurityDeflect = function(jsonapi) {
  // const countrystats = jsonapi.get('countrystats');
  // const gamemission = jsonapi.getIn(['activemission', 'inCountry']);
  // const countrystat = jsonapi.getIn([
  //   'countrystats',
  //   jsonapi.get('countrystats').indexOf(jsonapi.get('countrystats').find(countrystat => {
  //     return countrystat.get('name') === jsonapi.getIn(['activemission', 'inCountry']);
  //   }))
  // ]);
  // var probability = Math.random();
  // var border = 1 / (1 + 2 * countrystat.get('obscurity'));
  // var chance = probability < border;
  return Math.random() >= (1 / (1 + 2 * jsonapi.getIn([
    'countrystats',
    jsonapi.get('countrystats').indexOf(jsonapi.get('countrystats').find(countrystat => {
      return countrystat.get('name') === jsonapi.getIn(['activemission', 'inCountry']);
    }))
  ]).get('obscurity')));
};

export default obscurityDeflect;
