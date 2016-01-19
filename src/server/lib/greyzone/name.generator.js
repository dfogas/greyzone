// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// name_generator.js
// written and released to the public domain by drow <drow@bin.sh>
// http://creativecommons.org/publicdomain/zero/1.0/

var nameSet = {};
var chainCache = {};

nameSet.greyzone = [
  'Jeremy',
  'Jordan',
  'Jebediah',
  'Jordy',
  'Jesenin',
  'Jin',
  'John',
  'Julia',
  'Brick',
  'Jesse',
  'Jessie',
  'James',
  'Maya',
  'Michael',
  'Tori',
  'Zero',
  'Diesel',
  'Mustafa',
  'Maria',
  'Monika',
  'Katka',
  'Paul',
  'Peter',
  'Milton',
  'Nina',
  'Barbara',
  'Peter',
  'Yusuf',
  'Mahmud',
  'Jesus',
  'Carrie',
  'Oleg',
  'Ivan',
  'Prakhash',
  'Priya',
  'Tatyana'
];
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// generator function

function generateName(type) {
  var chain;
  if (chain = markovChain(type))
    return markovName(chain);
  return '';
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// generate multiple

  // function nameList(type, n_of) {
  //   var list = [];
  //
  //   var i; for (i = 0; i < n_of; i++) {
  //     list.push(generateName(type));
  //   }
  //   return list;
  // }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// get markov chain by type

function markovChain(type) {
  var chain;
  if (chain = chainCache[type])
    return chain;
  else {
    var list;
    if (list = nameSet[type]) {
      var chain;
      if (chain = constructChain(list)) {
        chainCache[type] = chain;
        return chain;
      }
    }
  }
  return false;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// construct markov chain from list of names

function constructChain(list) {
  var chain = {};

  var i; for (i = 0; i < list.length; i++) {
    var names = list[i].split(/\s+/);
    chain = incrChain(chain, 'parts', names.length);

    var j; for (j = 0; j < names.length; j++) {
      var name = names[j];
      chain = incrChain(chain, 'name_len', name.length);

      var c = name.substr(0, 1);
      chain = incrChain(chain, 'initial', c);

      var string = name.substr(1);
      var lastC = c;

      while (string.length > 0) {
        var c = string.substr(0, 1);
        chain = incrChain(chain, lastC, c);

        string = string.substr(1);
        lastC = c;
      }
    }
  }
  return scaleChain(chain);
}
function incrChain(chain, key, token) {
  if (chain[key])
    if (chain[key][token])
      chain[key][token]++;
    else
      chain[key][token] = 1;
  else {
    chain[key] = {};
    chain[key][token] = 1;
  }
  return chain;
}
function scaleChain(chain) {
  var tableLen = {};

  var key; for (key in chain) {
    tableLen[key] = 0;

    var token; for (token in chain[key]) {
      var count = chain[key][token];
      var weighted = Math.floor(Math.pow(count, 1.3));

      chain[key][token] = weighted;
      tableLen[key] += weighted;
    }
  }
  chain.tableLen = tableLen;
  return chain;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// construct name from markov chain

function markovName(chain) {
  var parts = selectLink(chain, 'parts');
  var names = [];

  for (var i = 0; i < parts; i++) {
    var nameLen = selectLink(chain, 'name_len');
    var c = selectLink(chain, 'initial');
    var name = c;
    var lastC = c;

    while (name.length < nameLen) {
      c = selectLink(chain, lastC);
      name += c;
      lastC = c;
    }
    names.push(name);
  }
  return names.join(' ');
}
function selectLink(chain, key) {
  var len = chain.tableLen[key];
  var idx = Math.floor(Math.random() * len);

  var t = 0; var token; for (token in chain[key]) {
    t += chain[key][token];
    if (idx < t) return token;
  }
  return '-';
}

export default generateName;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
