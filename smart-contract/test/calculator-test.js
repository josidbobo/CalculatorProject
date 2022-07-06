const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Calculator Tests", function () {
let Calculator;

  beforeEach(async () => {
    const calc = await ethers.getContractFactory("Calculator");
    Calculator = await calc.deploy();
    await Calculator.deployed();
  })

  describe("Calculator functions", function () {
    it("It should add two numbers", async function () {
      const result = await Calculator.addition(3,4);
      expect(result).to.be.equal(7);
    });
    it("It should subtract two numbers", async function () {
      const result = await Calculator.subtract(6,4);
      expect(result).to.be.equal(2);
    });
    it("It should divide two numbers", async function () {
      const result = await Calculator.divide(12,9);
      expect(result).to.not.be.equal(8);
    });
    it("It should multiply two numbers", async function () {
      const result = await Calculator.multiply(3,4);
      expect(result).to.be.equal(12);
    });
  });
});
  
