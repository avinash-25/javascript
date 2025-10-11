function success1(val1) {
    console.log("val-1 : ", val1);
    // throw new Error("SOmrthing went wrog in success -1");
}

function success2(val2) {
    console.log("val-2 : ", val2);
}

function success3(val3) {
    console.log("val-3 : ", val3);
}

function error(reason) {
    console.log("Error : ", reason);
}

function Global(err) {
    console.log("Global error : ", err);
}

export {
    success1,
    success2,
    success3,
    error,
    Global
};