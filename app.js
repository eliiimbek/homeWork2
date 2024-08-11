let clientAmount = 3500;
let fuelTypes = "98"

let fuelLiters = 0;

if (fuelTypes === "98" ) {
    fuelLiters = clientAmount / 100;
}else if (fuelTypes === "95" ) {
    fuelLiters = clientAmount / 74;
}else if (fuelTypes === "92" ) {
    fuelLiters = clientAmount / 69;
}else if (fuelTypes === "DIESEL" ) {
    fuelLiters = clientAmount / 78;
}else if (fuelTypes === "GAZ" ) {
    fuelLiters = clientAmount / 35;
}

switch (fuelTypes) {
    case "98":
        fuelLiters = clientAmount / 100;
        break;
    case "95":
        fuelLiters = clientAmount / 74;
        break;
    case "92":
        fuelLiters = clientAmount / 69;
        break;
    case "DIESEL":
        fuelLiters = clientAmount / 78;
        break;
    case "GAZ":
        fuelLiters = clientAmount / 35;
        break;
}

console.log(`${clientAmount} Som | Fuel ${fuelTypes} | ${fuelLiters} liters`);


// let regionCode = "08"
//
// switch (regionCode) {
//     case "01": {
//         console.log("01 region is Bishkek")
//     }
//     break
//     case "02": {
//         console.log("02 region is Osh")
//     }
//         break
//     case "03": {
//         console.log("03 region is Batken")
//     }
//         break
//     case "04": {
//         console.log("04 region is Jalal-Abad")
//     }
//         break
//     case "05": {
//         console.log("05 region is Naryn")
//     }
//         break
//     case "06": {
//         console.log("06 region is Osh prefecture")
//     }
//         break
//     case "07": {
//         console.log("07 region is Talas")
//     }
//         break
//     case "08": {
//         console.log("08 region is Chuy")
//     }
//         break
//     case "09": {
//         console.log("09 region is Yssyk-Kul")
//     }
//         break
// }
















