const accountId = 14453
let accountEmail = "jarvis@jarvis.com"
var accountPassword = "12345" 
/* Prefer not to use var
because of issue in block scope and functional scope*/
accountCity = "Balasore"
let accountState = ""
// If u dont give any thing/value in "" then it will show blank or null ''

// accountId = 2
// not allowed if u have already assigned as constaccountId= ??(anything)


accountEmail = "jv@jv.com"
accountPassword = "221212122"
accountCity = "Benagaluru"


console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


