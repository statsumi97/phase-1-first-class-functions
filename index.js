function spy(a, b) {
  return a + b;
}
function divide(a, b) {
  return a / b;
}
function receivesAFunction(operation) {
  return operation();
  
}
receivesAFunction(spy, 2, 2);
receivesAFunction(2, 2, divide);

//
function spy(a, b) {
  return a + b;
}
function divide(a, b) {
  return a / b;
}
function returnsANamedFunction(operation) {
  return function operation() {
  }

}
returnsANamedFunction(spy, 2, 2);
returnsANamedFunction(2, 2, divide);

//
function returnsAnAnonymousFunction() {
  return function () {
  }
}

/*
describe("returnsAnAnonymousFunction()", () => {
    var fn;

    before(() => {
      fn = returnsAnAnonymousFunction();
    });

    it("returns a function", () => {
      expect(fn).to.be.a("function");
    });

    it("returns an anonymous function", () => {
      expect(fn.name).to.eql("");
    });
  });
});
  */