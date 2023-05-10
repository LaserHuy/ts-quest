import assert from 'assert';


export function bankCustomer() {

    class BankCustomer {
      private name: string;
      private secretCode: string;

      constructor(name: string, secretCode: string) {
        this.name = name;
        this.secretCode = secretCode;
      }

      getName(): string {
        return this.name;
      }

      verifyPinInput(input: string): boolean {
        return input === this.secretCode;
      }
    }



// Test the BankCustomer class
      const customer: BankCustomer = new BankCustomer("John Doe", "1234");

      // Test case 1: Test getName() method
      assert.strictEqual(customer.getName(), "John Doe");

      // Test case 2: Test verifyPinInput() method with correct secret code
      assert.strictEqual(customer.verifyPinInput("1234"), true);

      // Test case 3: Test verifyPinInput() method with incorrect secret code
      assert.strictEqual(customer.verifyPinInput("5678"), false);

      // All test cases passed
      console.log("All test cases passed.");

}

