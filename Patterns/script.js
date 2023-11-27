function Task(name, description, isDone) {
  return {
    name: name,
    description: description,
    isDone: isDone,
  };
}

function TaskBuilder() {
  let name, description, isDone;
  return {
    setName: function (newName) {
      name = newName;
      return this;
    },
    setDescription: function (newDescription) {
      description = newDescription;
      return this;
    },
    setIsDone: function (newIsDone) {
      isDone = newIsDone;
      return this;
    },
    build: function () {
      return new Task(name, description, isDone);
    },
  };
}

const task1 = TaskBuilder()
  .setName("Mail1")
  .setDescription("Create Emai1")
  .setIsDone(false)
  .build();
console.log(task1);
//or
const task2Builder = TaskBuilder();
task2Builder.setName("Mail2");
task2Builder.setDescription("Create Emai2");
task2Builder.setIsDone(true);
const task2 = task2Builder.build();
console.log(task2);
