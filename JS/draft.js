let sampleObj = {
  name: "John",
  age: 25,
  isStudent: true,
};

function enumeratePropertiesUsingEntries(obj) {
  return Object.entries(obj).map(([key, value]) => ({
    propertyName: key,
    dataType: typeof value,
  }));
}

// let sampleObj = {
//   name: "John",
//   age: 25,
//   isStudent: true
// };

// function enumeratePropertiesUsingEntries(obj) {
//   const entries = Object.entries(obj);
//   const result = []
//   for(const [key, value] of entries){
//       result.push({propertyName: key, dataType: typeof value});
//   }
//   return result;
// }
