let guestList = [];

function addGuest() {
    const inputName = document.getElementById('inputName');
    const name = inputName.value.trim();
    if (name !== '') {
        guestList.push(name);
        updateGuestList();
        inputName.value = '';
    } else {
        alert('Por favor, insira um nome válido.');
    }
}

function removeGuest(index) {
    guestList.splice(index, 1);
    updateGuestList();
}

function updateGuestList() {
    const guestListElement = document.getElementById('guestList');
    guestListElement.innerHTML = '';
    guestList.forEach((guest, index) => {
        const li = document.createElement('li');
        li.textContent = guest;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = () => removeGuest(index);
        li.appendChild(removeButton);
        guestListElement.appendChild(li);
    });
}