let Person = require("../src/person");

var spyPerson = new Person();

describe("Getting a persons information and outputting it in a string", function() {
  it("Checks if the setName function is called", function() {
    spyOn(spyPerson, "setName");
    spyPerson.setName();
    expect(spyPerson.setName).toHaveBeenCalled();
  });

  it("Checks if the setAge function is called with parameters", function() {
    spyOn(spyPerson, "setAge");
    spyPerson.setAge(12);
    expect(spyPerson.setAge).toHaveBeenCalledWith(12);
  });

  it("Checks if a function is called more than once", function() {
    spyOn(spyPerson, "hello");
    spyPerson.hello(); 
    spyPerson.hello();
    expect(spyPerson.hello).toHaveBeenCalledTimes(2);
  });
});
