// message__gallery内の要素の記述
let flg = 1;

// ランダムなクラス名
const assignRandomClass = (int) => {
    return `message__galleryList${int}`;
}

const generateAndAppendElements = () => {
    for (let i = 0; i < numberOfElements; i++) {
        const int = Math.floor(Math.random() * 36) + 1;
        const element = document.createElement('span');
        // クラス名付与        
        const numAssignRandomClass = assignRandomClass(int);
        element.classList.add(numAssignRandomClass);
        container.appendChild(element);
    }
    flg = 0;
}


// container内53個のspan生成
const container = document.querySelector('#message__galleryContainer');
const galleryContainerY = container.getBoundingClientRect().top;
const screenWidth = window.innerWidth;
const windowHeight = window.innerHeight;

let numberOfElements;
if (screenWidth < 500) {
    numberOfElements = 63;
} else if (screenWidth < 800) {
    numberOfElements = 100;
} else if (screenWidth < 1000) {
    numberOfElements = 150;
} else {
    numberOfElements = 183;
};


let isElementsGenerated = false;

window.addEventListener('scroll', () => {
    const ST = window.scrollY;
    if (ST > galleryContainerY - windowHeight * 0.8 && !isElementsGenerated) {
        if (flg) { generateAndAppendElements(); }
    }
});