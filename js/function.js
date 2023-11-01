
// message__gallery内の要素の記述

const getRandomInt = () => {
    return Math.floor(Math.random() * 36) + 1;
}

// ランダムなクラス名
function assignRandomClass(element) {
    const randomClassName = `message__galleryList${getRandomInt()}`;
    element.classList.add(randomClassName);
}
// container内53個のspan生成
const container = document.getElementById('message__galleryContainer');

for (let i = 0; i < 54; i++) {
    const element = document.createElement('span');

    // クラス名付与
    assignRandomClass(element);
    element.classList.add('message__galleryList');

    container.appendChild(element);
}




// 画面下部の砂嵐の生成
const fixSunaarashi = document.getElementById('header__sunaarashi');
console.log(fixSunaarashi )

function sunaarashi() {
    if (!!!document.createElement('canvas').getContext) {
        return false;
    }
    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        x, y, c

    canvas.width = 100;
    canvas.height = 100;
    let arry = [100, 200]

    function draw() {
        for (x = 0; x < canvas.width; x++) {
            for (y = 0; y < canvas.height; y++) {
                c = arry[Math.floor(Math.random() * arry.length)];
                ctx.fillStyle = 'rgb(' + c + ',' + c + ',' + c + ')';
                ctx.fillRect(x, y, 3, 3);
            }
        }
        fixSunaarashi.style.backgroundImage = "url(" + canvas.toDataURL("image/png") + ")";
        requestAnimationFrame(draw);
    }

    draw();
}

sunaarashi()