// const accountId && const account_id  &&  const account_Id 
const accountId = 1445533
let accountEmail = "Moumitahalder456@gmail.com"
var accountPassword = "12345"
accountCity = "kolkata"
let accountState;

// accountId = 2 // not allowed

accountEmail = "moumita@gmail.com"
accountPassword = "234321"
accountCity = "Bengaluru"

/* prefer not to use var coz of issue in block scope and functional scope */

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])