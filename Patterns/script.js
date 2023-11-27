let person = function (name, age, city) {
  let state = {
    name: name,
    age: age,
    city: city,
  };
  return Object.assign(state, behavior(state));
};

function behavior(state) {
  return {
    introduce: function () {
      console.log(
        `${state.name} says: My name is ${state.name}, I'm ${state.age} old and I'm from ${state.city}`
      );
    },
  };
}

let person1 = person("Olek", 21, "Wro");
person1.introduce();
