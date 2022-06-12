
// store data to session storage
sessionStorage.setItem("user1", "Arif");
sessionStorage.setItem("user2", "Rifat");

// read data to session storage
const userName = sessionStorage.getItem("user1");
console.log(userName);

// Remove data from session storage
// sessionStorage.removeItem("user1");

// Remove all data from session storage
// sessionStorage.clear();


// -------------------------Object----------------------
const user = {id: "001", name: "Hossain"};
sessionStorage.setItem("user", JSON.stringify(user));

// read data to session storage
const userInfo = JSON.parse(sessionStorage.getItem("user"));
console.log(userInfo);
