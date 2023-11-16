# JavaScript Discount and Installment Calculator

This is a simple JavaScript program that calculates the price of a product after applying a discount and/or splitting the payment into installments.

## Installation

1. Clone the repository to your local machine.
2. Open the JavaScript file in your preferred code editor.
3. Run the JavaScript file in your browser's console.

## Usage

The program provides three functions:

- `descount(normalPrice, discountRate)`: This function calculates the discounted price based on the `normalPrice` and `discountRate` parameters.
- `installment(paymentCondition)`: This function calculates the price per installment based on the `paymentCondition` parameter.
- `calculateDiscount()`: This function uses a switch statement to determine which discount or installment method to apply based on the `payment` variable.

## How it works

1. `const normalPrice = 184.7` - This line declares a constant variable normalPrice and assigns it the value of 184.7. This is the original price of the product.

2. `function descount(normalPrice, discountRate)` - This function calculates the discounted price based on the `normalPrice` and `discountRate` parameters. It first calculates the discounted value `(valueDescount)`, then checks the `discountRate` to determine the payment method. Depending on the `discountRate`, it logs a message to the console detailing the original price, payment method, and discounted value. Finally, it returns the final

3. `function installment(paymentCondition)` - This function calculates the price per installment based on the `paymentCondition` parameter. If the `paymentCondition` is 2, it logs a message to the console detailing the original price and the number of installments. It then returns the price per installment. If the `paymentCondition` is greater than 2, it adds a tax to the price per installment and logs a message to the console detailing the original price, number of installments, and the added tax.

4. `function calculateDiscount()` - This function uses a switch statement to determine which discount or installment method to apply based on the `payment` variable. It then calls the appropriate function and returns the result.

5. `console.log(calculateDiscount())` - This line calls the `calculateDiscount` function and logs the result to the console.

Here are some examples of how the functions work:

- If `descount(184.7, 0.1)` is called, it will calculate a 10% discount on the normal price, log a message to the console detailing the original price, the payment method (Debt), and the discounted value, and then return the final price after the discount is applied.

- If `installment(2)` is called, it will calculate the price per installment based on the normal price and log a message to the console detailing the original price and the number of installments. It will then return the price per installment.

- If `calculateDiscount()` is called, it will call the descount function with a 10% discount rate and log the result to the console.

The code is a good example of how to use functions in JavaScript to perform calculations and log messages to the console

## Contributing

Contributions to this project are welcome. If you would like to contribute, please follow these steps:

1. Fork this repository.
2. Create a branch with a descriptive name for your change.
3. Make your changes to the created branch.
4. Submit a pull request to the master branch of this repository.

## Contact

If you have any questions or suggestions, please contact me via my email or my GitHub profile.

## Thanks

This project was made possible thanks to the support and guidance of DIO

## References

This project was inspired by a DIO challenge
