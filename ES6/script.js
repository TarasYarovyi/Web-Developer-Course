// destructurization
const employee = {
  name: "Ola",
  id: 34,
  employment: {
    company: "example.com",
    address: {
      country: "PL",
      city: "WRO",
    },
  },
};

const {
  name,
  employment: { company },
  employment: {
    address: { city },
  },
} = employee;
console.log(name);
console.log(company);
console.log(city);
