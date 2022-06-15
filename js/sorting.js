import { allUsers, updater, table } from "./helper";

const ownName = document.getElementById('name');
const username = document.getElementById('username');
const userEmail = document.getElementById('email');
const userWebsite = document.getElementById('website');


ownName.onclick = () => {
    allUsers.sort((user1, user2) => user1.name.localeCompare(user2.name))
    const blocks = document.querySelectorAll('tr.opener');

    for (let i = 0; i < blocks.length; i++) {
        blocks[i].remove();
    }

    updater(allUsers, table);
}

username.onclick = () => {
    allUsers.sort((user1, user2) => user1.username.localeCompare(user2.username))
    const blocks = document.querySelectorAll('tr.opener');

    for (let i = 0; i < blocks.length; i++) {
        blocks[i].remove();
    }

    updater(allUsers, table);
}

userEmail.onclick = () => {
    allUsers.sort((user1, user2) => user1.email.localeCompare(user2.email))
    const blocks = document.querySelectorAll('tr.opener');

    for (let i = 0; i < blocks.length; i++) {
        blocks[i].remove();
    }

    updater(allUsers, table);
}

userWebsite.onclick = () => {
    allUsers.sort((user1, user2) => user1.website.localeCompare(user2.website))
    const blocks = document.querySelectorAll('tr.opener');

    for (let i = 0; i < blocks.length; i++) {
        blocks[i].remove();
    }

    updater(allUsers, table);
}

