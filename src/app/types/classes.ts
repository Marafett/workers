export class Humans {
  gender: string;
  age: string;
  constructor(gender, age) {
    this.gender = gender;
    this.age = age;
  }
}
export class Workers extends Humans {
  position: string;
  experience: string;
  constructor(card) {
    super(card.gender, card.age);
    this.position = card.position;
    this.experience = card.experience;
  }
}
