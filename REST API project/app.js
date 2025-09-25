//! Named export
export const sum = (m, n) => m + n;
export const sub = (m, n) => m - n;
export const prod = (m, n) => m * n;
const power = (m, n) => m ** n;

//! using commonJS
// module.exports = {
//     sum,
//     sub,
//     prod,
// }

export default power;


//! using esm
// export {
//     sum,
//     sub,
//     prod,
//     pow
// };