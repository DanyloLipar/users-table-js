import { allUsers, updater, table } from "./helper";
const addingBtn = document.getElementById('userForm');
const addName = document.getElementById('addName');
const addUserName = document.getElementById('addUserName');
const addEmail = document.getElementById('addEmail');
const addWebsite = document.getElementById('addWebsite');
const addCity = document.getElementById('addCity');
const addStreet = document.getElementById('addStreet');
const addZip = document.getElementById('addZip');
const adding = document.getElementById('adder');
const modal = document.getElementById('addModal');
const closer = document.getElementById('closer');

adding.addEventListener('click', function () {
    modal.style.display = "block";
})

closer.onclick = () => {
    modal.style.display = "none";
};

function clear() {
    addName.value = '';
    addUserName.value = '';
    addEmail.value = '';
    addWebsite.value = '';
    addCity.value = '';
    addStreet.value = '';
    addZip.value = '';
}

addingBtn.onsubmit = (event) => {
    event.preventDefault();
    const newUser = {};
    const allId = allUsers.map(el => el.id);
    const newId = Math.max(...allId);
    console.log(allId);

    newUser.name = addName.value;
    newUser.username = addUserName.value;
    newUser.email = addEmail.value;
    newUser.website = addWebsite.value;
    newUser.id = newId + 1;
    newUser.address = {};
    newUser.address.zipcode = addZip.value;
    newUser.address.city = addCity.value;
    newUser.address.street = addStreet.value;

    const usersFromServ = JSON.parse(localStorage.getItem('users'));
    usersFromServ.push(newUser);
    localStorage.setItem('users', JSON.stringify(usersFromServ));
    const tableBlocks = document.querySelectorAll('tr.opener');
    for (let i = 0; i < tableBlocks.length; i++) {
        tableBlocks[i].remove();
    }
    updater(usersFromServ, table);
    modal.style.display = 'none';

    clear();
}