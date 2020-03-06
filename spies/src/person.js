class Person {
  constructor(userName, userAge, userGender, userInterests) {
    this.name = userName;
    this.age = userAge;
    this.gender = userGender;
    this.interests = userInterests;
  }
  setName(name) {
     return this.name;
  }

  setAge(age) {
    return this.userAge;
  }

  setGender(gender) {
    return this.gender;
  }
  

  hello() {
    return (
      "Hello my name is " +
      this.setName() +
      " and i am " +
      this.setAge() +
      " years old " +
      this.gender +
      " web developer. my interest are " +
      person.interests[0] +
      ", " +
      person.interests[1] +
      " and " +
      person.interests[2]
    );
  }
}
let person = new Person("Ryan", 30, "male", [
  "being a hardarse",
  "agile",
  "ssd hard drives"
]);

module.exports = Person;
