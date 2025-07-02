const input = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

addButton.addEventListener('click', function () {
    const text = input.value.trim();
    if (text === '') {
        alert('請輸入事項！');
        return;
    }

    // 建立 li 元素
    const li = document.createElement('li');

    // ✅ 建立 checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'todo-checkbox';

    // 建立文字 label
    const label = document.createElement('span');
    label.textContent = text;
    label.className = 'todo-text';

    // 當 checkbox 被勾選時，加上 completed 樣式
    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            li.classList.add('completed');
        } else {
            li.classList.remove('completed');
        }
    });

    // ❌ 刪除按鈕
    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = '❌';
    deleteBtn.className = 'delete-btn';

    deleteBtn.addEventListener('click', function () {
        li.remove();
    });

    // 組合起來
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    input.value = '';
});
