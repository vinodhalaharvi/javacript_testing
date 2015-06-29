(function() {
      ages = {
	jim: 12,
	john: 7
      };
    (function() {
      var k, v;
      for (k in ages) {
	v = ages[k];
	console.log(k + "something is value : " + v);
      }
    }).call(this);
}).call(this);
