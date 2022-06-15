const modalWindow = document.getElementById('more');
const closerTwo = document.querySelector('.closer-2');

closerTwo.onclick = () => {
    modalWindow.style.display = "none";
    document.querySelector('.new-modal').remove();
}
