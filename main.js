/**
 * @author Sims, Nicolas (sableye.nico@gmail.com)
 * @version 0.0.1
 * @summary River Falls Homes Construction Company. || created: 09.22.2016
 * @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let lotNum, numBed, numBath, sizeGarage, totalPrice;
const LOTPRICE = 50000, BEDPRICE = 17000, BATHPRICE = 12500, GARAGEPRICE = 6000;

function main() {
    setLotNum();
    setNumBed();
    setNumBath();
    setSizeGarage();
    setTotalPrice();
    printTotalPrice();
}

main();

function setLotNum() {
    lotNum = PROMPT.question('What lot would you like your house to be built upon?\n');
}

function setNumBed() {
    numBed = PROMPT.question('How many bedrooms would you like to have in your house?\n');
}

function setNumBath() {
    numBath = PROMPT.question('How many bathrooms would you like to have in your house?\n');
}

function setSizeGarage() {
    sizeGarage = PROMPT.question('How many cars do you want to be able to fit in your garage?\n');
}

function setTotalPrice() {
    totalPrice = Number(LOTPRICE + numBed * BEDPRICE + numBath * BATHPRICE + sizeGarage * GARAGEPRICE);
}

function printTotalPrice() {
    console.log('Your total price is $' + totalPrice + ', and your house will be built on lot #' + lotNum + '.');
}

