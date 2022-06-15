import { updater, table } from "./helper";

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const fetchUsers = async () => {
    const data = await fetch(`${BASE_URL}/users`);
    const users = await data.json();
    if (!JSON.parse(localStorage.getItem('users'))) {
        await localStorage.setItem('users', JSON.stringify(users))
    }
    await updater(JSON.parse(localStorage.getItem('users')), table);
    return;
}

fetchUsers();
