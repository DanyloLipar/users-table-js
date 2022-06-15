export const allUsers = JSON.parse(localStorage.getItem('users'));
export const table = document.getElementById('table');

const neededUser = (id) => {
    return allUsers.find(user => user.id === Number(id));
}

export function updater(users, father) {
    users.forEach(user => {
        const newStr = document.createElement('tr')
        newStr.className = 'description opener';

        newStr.innerHTML = `
      <td class="description__modal sort-name" userid=${user.id}>${user.name}</td>
      <td>${user.username}</td>
      <td>${user.email}</td>
      <td class="description__website">${user.website}</td>
      <td class="remover">
        <button getid="${user.id}" class="remover__button">🗙</button>
      </td>
    `

        father.appendChild(newStr);
    })

    const userBox = document.querySelectorAll(".sort-name");
    const generalBlock = document.querySelector('.details__window-items');
    const modalWindow = document.getElementById('more');

    for (let i = 0; i < userBox.length; i++) {
        userBox[i].onclick = () => {
            const user = neededUser(userBox[i].getAttribute('userid'));
            const newDetails = document.createElement('div');
            newDetails.className = 'new-modal';
            newDetails.innerHTML = `
                <p>${user.address.zipcode}, ${user.address.city} ${user.address.street}</p>
            `;
            modalWindow.style.display = 'block';

            generalBlock.appendChild(newDetails);
        };
    }

    // Removing user
    let removerUserButtons = document.querySelectorAll('.remover__button');
    for (let i = 0; i < removerUserButtons.length; i++) {
        removerUserButtons[i].onclick = () => {
            const myUsers = JSON.parse(localStorage.getItem('users'));
            const index = myUsers.findIndex(user => user.id === Number(removerUserButtons[i].getAttribute('getid')))
            myUsers.splice(index, 1);
            console.log(myUsers)
            localStorage.setItem('users', JSON.stringify(myUsers))
            const allBlocks = document.querySelectorAll('tr.opener');

            for (let i = 0; i < allBlocks.length; i++) {
                allBlocks[i].remove();
            }

            updater(JSON.parse(localStorage.getItem('users')), table);
        }
    }
}