//type assertion and type narrowing
function fetchUserData() {
    return { id: 1, name: 'omar', email: 'omar.lu@gmail.com' };
}
var userData = fetchUserData();
console.log(userData.name);
