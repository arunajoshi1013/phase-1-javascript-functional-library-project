function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i], i, collection);
    }
  } else {
    for (let key in collection) {
      callback(collection[key], key, collection);
    }
  }
  return collection;
}

function myMap(collection, callback) {
  let result = [];
  myEach(collection, (value, index, collection) => {
    result.push(callback(value, index, collection));
  });
  return result;
}

function myFind(collection, predicate) {
  for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i])) {
      return collection[i];
    }
  }
  return undefined;
}

function myFilter(collection, predicate) {
  let filteredArray = [];

  myEach(collection, function(value) {
    if (predicate(value)) {
      filteredArray.push(value);
    }
  });

  return filteredArray;
}




function mySize(collection) {
  if (Array.isArray(collection)) {
    return collection.length;
  } else if (typeof collection === 'object') {
    return Object.keys(collection).length;
  } else {
    return 0;
  }
}

function myFirst(array, n = 1) {
  if (n === 1) {
    return array[0];
  } else {
    return array.slice(0, n);
  }
}

function myLast(array, n) {
  if (!n) {
    return array[array.length - 1];
  } else {
    return array.slice(Math.max(array.length - n, 0));
  }
}


function myKeys(object) {
  let keys = [];
  for (let key in object) {
    keys.push(key);
  }
  return keys;
}
function myValues(obj) {
  let values = [];
  for (let key in obj) {
    values.push(obj[key]);
  }
  return values;
}

function myReduce(collection, callback, acc) {
  let values;
  
  if (Array.isArray(collection)) {
    values = collection;
  } else {
    values = Object.values(collection);
  }
  
  let startIndex = 0;
  if (acc === undefined) {
    acc = values[0];
    startIndex = 1;
  }
  
  for (let i = startIndex; i < values.length; i++) {
    acc = callback(acc, values[i], collection);
  }
  
  return acc;
}







