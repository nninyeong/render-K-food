const menuItems = [
    { name: '비빔밥', description: '밥 위에 나물, 고기, 고추장 등을 얹고 비벼 먹는 한국 요리', category: '밥' },
    { name: '김치찌개', description: '김치와 돼지고기 등을 넣고 끓인 한국의 찌개 요리', category: '국/찌개' },
    { name: '된장찌개', description: '된장과 각종 야채를 넣고 끓인 찌개 요리', category: '국/찌개' },
    { name: '미역국', description: '미역과 소고기를 넣고 끓인 국물 요리', category: '국/찌개' },
    { name: '감자전', description: '감자가 가득 들어간 쫀득쫀득 전', category: '전' },
    { name: '김치전', description: '김치가 가득 들어간 바삭바삭 전', category: '전' }
];

function setMenu() {
    for (let menu of menuItems) {
        let item = `
        <li class="menuItem">
            <h2 class="menuName">${menu.name}</h2>
            <div class="menuDescription">${menu.description}</div>
        </li>
        `;
        $('#menuList').append(item);
    }
}

function filterMenu(selectedItem) {
    let selectedCategory = selectedItem.textContent;
    let selectedMenu = menuItems.filter(menu => menu.category === selectedCategory);
    if(selectedMenu.length === 0) {
        selectedMenu = menuItems;
    }

    $('#menuList').empty();

    for (let menu of selectedMenu) {
        let item = `
        <li class="menuItem">
            <h2 class="menuName">${menu.name}</h2>
            <div class="menuDescription">${menu.description}</div>
        </li>
        `;

        $('#menuList').append(item);
    }
}

$(document).ready(setMenu);