function createUser(name, contact) {
  const user = {
    name: name,
<<<<<<< HEAD
    email: null,
    tel: null,
=======
>>>>>>> 65720425b3faef1e33df36ce4f20c391168b7f63
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
