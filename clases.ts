class calc {
    num1:number=0
    num2:number=0
    constructor(num1:number, num2:number ){
        this.num1=num1;
        this.num2=num2;  
    }
    regresaSuma(){
       return this.num1 + this.num2;     
    }
}
let calcuradora1=new calc(5,6)
alert(calcuradora1.regresaSuma());