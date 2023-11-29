class OldPaymentSystem {
  makePayment(amount) {
    return true;
  }
}

class NewPaymentGateway {
  login(credentials) {}
  setAmount(amount) {}
  confirmPayment() {
    return true;
  }
}

class PaymentAdapter {
  constructor(credentials) {
    this.paymentGateWay = new NewPaymentGateway();
    this.paymentGateWay.login(credentials);
  }

  makePayment(amount) {
    this.paymentGateWay.setAmount(amount);
    return this.paymentGateWay.confirmPayment();
  }
}
