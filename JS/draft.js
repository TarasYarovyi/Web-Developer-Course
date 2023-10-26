function createUser(name, contact) {
  const user = {
    name: name,
    email: null,
    tel: null,
  };
  if (typeof contact === "string") {
    user.email = contact;
  } else if (typeof contact === "number") {
    user.tel = contact;
  }
  return user;
}
const user1 = createUser("Ola", "ola@example.com");
const user2 = createUser("Kasia", 782256535);
console.log(user1);
console.log(user2);
