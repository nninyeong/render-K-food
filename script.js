const menuItems = [
    { name: '비빔밥', description: '밥 위에 나물, 고기, 고추장 등을 얹고 비벼 먹는 한국 요리' },
    { name: '김치찌개', description: '김치와 돼지고기 등을 넣고 끓인 한국의 찌개 요리' },
    { name: '불고기', description: '양념한 고기를 구워서 먹는 한국 요리' },
    { name: '떡볶이', description: '떡과 어묵을 고추장 양념에 볶아 만든 한국의 간식' },
    { name: '잡채', description: '당면과 여러 채소, 고기를 볶아 만든 한국 요리' }
];

function setMenu() {
    for (let menu of menuItems) {
        let item = `
        <li class="menuItem">
            <h2>${menu.name}</h2>
            <p>${menu.description}</p>
        </li>
        `;
        $('#menuList').append(item);
    }
}

$(document).ready(setMenu);