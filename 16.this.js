// Traditional function example
// const obj = {
//   count: 10,
//   doSomethingLater: function () {
//     setTimeout(function () {
//       // the function executes on the window scope
//       this.count++;
//       console.log(this.count);
//     }, 300);
//   },
// };

// obj.doSomethingLater(); // console prints "NaN", because the property "count" is not in the window scope.

//========================================
// Arrow function example
const obj = {
  count: 10,
  doSomethingLater: function () {
    // The traditional function binds "this" to the "obj" context.
    setTimeout(() => {
      // Since the arrow function doesn't have its own binding and
      // setTimeout (as a function call) doesn't create a binding
      // itself, the "obj" context of the traditional function will
      // be used within.
      this.count++; //webstorm pokaze odnosnik this do czego sie odnosi
      console.log(this.count);
    }, 300);
  },
};

obj.doSomethingLater(); //11
