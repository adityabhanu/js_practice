// Closure to create a private counter

function counter() {
  var counter = 0;

  return {
    add: function (inc) {
      counter = counter + inc;
    },
    retrieve: function () {
      console.log("Current Value of counter is : " + counter);
    },
  };
}

var countVar = counter();
countVar.add(10);
countVar.retrieve();

countVar.add(10);
countVar.retrieve();
