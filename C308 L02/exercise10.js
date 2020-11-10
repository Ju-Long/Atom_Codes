class User {
    constructor(name, age, email) {
        this._name = name;
        this._age = age;
        this._email = email;
     }
}


class Adminstrator extends User{
  constructor(name, age, email, role) {
    super(name, age, email);
    this._role = role;
  }
}
