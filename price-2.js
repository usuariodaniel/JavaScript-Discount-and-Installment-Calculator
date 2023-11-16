const normalPrice = 184.7;

function descount(normalPrice, discountRate) {
  let valueDescount = normalPrice * discountRate;
  if (discountRate === 0.1) {
    console.log(
      "Normal Value: " +
        normalPrice +
        "\nPayment Method: Debt" +
        "\nValue with 10% descount = " +
        valueDescount.toFixed(2)
    );
  } else if (discountRate === 0.15) {
    console.log(
      "Normal Value: " +
        normalPrice +
        "\nPayment Method: Money" +
        "\nValue with 15% descount = " +
        valueDescount.toFixed(2)
    );
  }
  return normalPrice - valueDescount;
}

function installment(paymentCondition) {
  let valueInstallment = normalPrice / paymentCondition;

  if (paymentCondition === 2) {
    console.log(
      "Normal Value: " + normalPrice + "\nPayment Method: 2 Installments of "
    );
    return parseFloat(valueInstallment.toFixed(2));
  } else if (paymentCondition > 2) {
    let taxePayment = normalPrice * 0.15;
    console.log(
      "Normal Value: " +
        normalPrice +
        "\nPayment Method: " +
        paymentCondition +
        " installments of "
    );
    return valueInstallment + taxePayment;
  }
}

function calculateDiscount() {
  const payment = 2;

  switch (payment) {
    case 1:
      return descount(normalPrice, 0.1);
    case 2:
      return descount(normalPrice, 0.15);
    case 3:
      return installment(2);
    case 4:
      return installment(3);
  }
}

console.log(calculateDiscount());
