var a = 1;
let b = 2;
const c = 3;

{
    console.log("Indide local block");
    var a = 10;
    let b = 20;
    const c = 30;
    var d = 30;

    console.log("a = ",a); // 10
    console.log("b = ",b); // 20
    console.log("c = ",c); // 30
    console.log("d = ",d); // 30
}

    console.log("Outside local block");
    console.log("a = ",a); // 10
    console.log("b = ",b); //2
    console.log("c = ",c); // 3
    console.log("d = ",d); // 30