var should = require('should');
var counion = require('../index');

describe("counion", function() {
  it("should work with deep objects", function(done) {
    function XYZ(z) {
      this.x = 1;
      this.y = 2;
      this.z = z;
    }

    var arr1 = [
      1,
      2.5,
      [2, 4, 9],
      {a: 2, c: 54},
      {a: 2, b: 54, c: {z:[1,{d: 1, e: 2, f: 3},3]}},
      new XYZ(),
      'a',
      null,
      undefined,
    ];
    var arr2 = [
      new XYZ(2),
      1,
      2,
      2.5,
      null,
      [2, 4, 9],
      new XYZ(),
      {a: 2, c: 54, b: 99},
      {b: 54, c: {z:[1,{d: 1, e: 2, f: 3},3]}, a: 2},
      'a',
      undefined,
    ];
    var expected = [
      1,
      2.5,
      [2, 4, 9],
      {a: 2, c: 54},
      {a: 2, b: 54, c: {z:[1,{d: 1, e: 2, f: 3},3]}},
      {x: 1, y: 2, z: undefined},
      'a',
      null,
      undefined,
      {x: 1, y: 2, z: 2},
      2,
      {a: 2, c: 54, b: 99},
    ];

    counion(arr1, arr2).should.eql(expected);
    done();
  });

});

