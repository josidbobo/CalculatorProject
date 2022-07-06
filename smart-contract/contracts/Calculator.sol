//SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Calculator {
    
    using SafeMath for uint256;

    function addition(uint256 a, uint256 b) public pure returns (uint256) {
        return a.add(b);
    }

    function subtract(uint256 a, uint256 b) public pure returns (uint256) {
        return a.sub(b);
    }

    function multiply(uint256 a, uint256 b) public pure returns (uint256) {
        return a.mul(b);
    }

    function divide(uint256 a, uint256 b) public pure returns (uint256) {
        return a.div(b);
    }
}
