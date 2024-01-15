let ageOfUser = [];

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  ages() {
    ageOfUser.push(this.age);
  }
  comparation(nome) {
    if (ageOfUser[ageOfUser.length - 2] > this.age) {
      console.log(
        this.firstName + " " + this.lastName + " è più giovane di " + nome
      );
    } else {
      console.log(
        this.firstName + " " + this.lastName + " è più vecchio di " + nome
      );
    }
  }
}

const user1 = new User("mario", "Rossi", 15, "milano");

const user2 = new User("giancarlo", "bianchi", 20, "Roma");
const user3 = new User("stefano", "renzi", 10, "Roma");
const user4 = new User("renato", "zero", 50, "Roma");
user1.ages();
console.log(ageOfUser);

user2.ages();
console.log(ageOfUser);
user2.comparation(user1.firstName);
user3.ages();

user3.comparation(user2.firstName);
console.log(ageOfUser);
user4.comparation(user3.firstName);
