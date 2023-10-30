// 36までのランダムな整数を生成
function getRandomInt() {
    return Math.floor(Math.random() * 36) + 1;
}

// ランダムにクラス名を付与
function assignRandomClass(element) {
    const randomClassName = `message__galleryList${getRandomInt()}`;
    element.classList.add(randomClassName);
}

// 63個のHTML要素を生成、ランダムなクラス名を付与する
const container = document.getElementById('message__galleryContainer');

for (let i = 0; i < 54; i++) {
    const element = document.createElement('span');

    // クラス名を付与
    assignRandomClass(element);
    element.classList.add('message__galleryList');

    container.appendChild(element);
}