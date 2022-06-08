// Store data to Browser Local storage using setItem()
// setItem(key(string), value(string))
localStorage.setItem("userName", "James");
localStorage.setItem("password", "James007");


// Read data from Browser Local storage using getItem()
// getItem(key)
const userName = localStorage.getItem("userName");
const userPassword = localStorage.getItem("password");
console.log(userName, userPassword);

// Update data of Browser Local storage using setItem()
localStorage.setItem("userName", "Siam");
localStorage.setItem("password", "Siam012");

// Remove data From Browser Local storage using removeItem()
// removeItem(key)
localStorage.removeItem("userName");
localStorage.removeItem("password");


// ------------------- Array -------------------
// setItem(key, value)
const countries = ["Bangladesh", "Germany", "China"];

// To store data, Object needs JSON format
// Object to JSON: using JSON.stringfy
localStorage.setItem("countries", JSON.stringify(countries));
localStorage.setItem("Password", "hello888");

// To read data, Need Object format
// JSON to Object: using JSON.parse()
// getItem(key)
const obj = JSON.parse(localStorage.getItem("countries"))
console.log(obj)
console.log(obj[0])

// Remove everything: using localStorage.cleat()
localStorage.clear()
