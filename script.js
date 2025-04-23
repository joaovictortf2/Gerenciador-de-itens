function showTab(tabId, event) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.tab-button').forEach(el => el.classList.remove('active'));
    document.getElementById(tabId).classList.remove('hidden');
    event.target.classList.add('active');
  }

  function addItem() {
    const link = document.getElementById('link').value;
    const image = document.getElementById('image').value;
    const description = document.getElementById('description').value;

    const itemList = document.getElementById('itemList');
    const item = document.createElement('div');
    item.className = 'glass p-4 rounded-lg shadow-lg relative';

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Excluir';
    deleteButton.className = 'absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1 rounded';
    deleteButton.onclick = function () {
      item.remove();
    };

    item.innerHTML = `
      <a href="${link}" target="_blank" class="text-blue-200 underline font-bold">${link}</a><br>
      <img src="${image}" alt="Imagem" class="rounded-lg my-2 shadow-md max-h-60 w-auto mx-auto"><br>
      <p class="text-lg">${description}</p> `;

    item.appendChild(deleteButton);
    itemList.appendChild(item);

    document.getElementById('link').value = '';
    document.getElementById('image').value = '';
    document.getElementById('description').value = '';
  }