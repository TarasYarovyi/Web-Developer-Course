function CreditRequest(data) {
  this.data = data;
}

function CheckHistory(CreditRequest) {
  this.check = function () {
    if (CreditRequest.history === "Positive") {
      return true;
    }

    return false;
  };
}
function CheckSalary(CreditRequest, amount) {
  this.check = function () {
    if (CreditRequest.salary > amount) {
      return true;
    }
    return false;
  };
}

CreditRequest.prototype.applyFor = function (amount) {
  let result = "Aproved";
  let history = new CheckHistory(this.data);
  if (!history.check()) result = "Not Approved becouse of credit history";
  let salary = new CheckSalary(this.data, amount);
  if (!salary.check()) result = "Not Approved becouse of salary";
  return result;
};

let request1 = new CreditRequest({
  name: "Przemek",
  salary: 10000,
  history: "Positive",
});
let answer = request1.applyFor(9000);
console.log(answer);
