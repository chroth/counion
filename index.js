var _ = require('lodash');

module.exports = function counion(a, b) {
  var indexOfObject = function (arr, v) {
    for (var i = 0, len = arr.length; i < len; i++) {
      if (_.isEqual(arr[i], v)) {
        return i;
      }
    }

    return -1;
  };

  var unique = function (v, i, self) {
    return indexOfObject(self, v) === i;
  };

  return a.concat(b).filter(unique);
};

