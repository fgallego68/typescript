"use strict";
class calc {
    constructor(num1, num2) {
        this.num1 = 0;
        this.num2 = 0;
        this.num1 = num1;
        this.num2 = num2;
    }
    regresaSuma() {
        return this.num1 + this.num2;
    }
}
let calcuradora1 = new calc(5, 6);
alert(calcuradora1.regresaSuma());
