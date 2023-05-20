const users = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function filter() {
  let filt = document.getElementById("selectprof");
  let value = filt.selectedOptions[0].text;
  if (value == "Profession") {
    alert("Select a profession before clicking the filter button.");
  } else {
    let filtUsers = users.filter(
      (usr) => usr.profession.toUpperCase() == value.toUpperCase()
    );

    showUser(filtUsers); //showUser(filtUsers)
  }
}

const userContainer = document.getElementById("usercontainer");

function addUser() {
  let user = {};
  console.log(users);

  user.name = document.getElementById("name").value;
  user.profession = document.getElementById("profession").value;
  user.age = document.getElementById("age").value;

  users.push(user);
  showUser(users); //showUser(users)

  document.getElementById("name").value = "";
  document.getElementById("profession").value = "";
  document.getElementById("age").value = "";
}

function showUser(list) {
  //showUser(list)
  console.log("inside showUser");
  userContainer.innerHTML = "";
  list = list || users;
  for (let i = 0; i < list.length; i++) {
    const user = document.createElement("div");
    user.className = "User";

    const id = document.createElement("div");
    id.innerText = i + 1 + ".";
    const name = document.createElement("div");
    name.innerText = "Name : " + list[i].name;
    const profession = document.createElement("div");
    profession.innerText = "Profession: " + list[i].profession;
    const age = document.createElement("div");
    age.innerText = "Age:" + list[i].age;

    user.append(id);
    user.append(name);
    user.append(profession);
    user.append(age);

    userContainer.append(user);
  }
}
