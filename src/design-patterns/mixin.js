class Dog {
    constructor(props) {
        this.name = props.name
    }
}

const animalFunctionality = {
    walk: () => console.log("Walking!"),
    sleep: () => console.log("Sleeping!"),
  };

  const dogFunctionality = {
    bark: () => console.log("Woof!"),
    wagTail: () => console.log("Wagging my tail!"),
    play: () => console.log("Playing!"),
    walk() {
      super.walk();
    },
    sleep() {
      super.sleep();
    },
  };
   

Object.assign(dogFunctionality, animalFunctionality)
Object.assign(Dog.prototype, dogFunctionality)

const pet1 = new Dog({name: "Daisy"});


console.log(pet1.name);
pet1.bark();
pet1.play();
pet1.walk();
pet1.sleep();

export default {Dog, pet1}