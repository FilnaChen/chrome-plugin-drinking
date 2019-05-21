const pic = document.createElement('img');
const remind = document.createElement('p');
const recieve = document.createElement('div');
const body = document.getElementsByTagName('body')[0];
body.appendChild(pic);
body.appendChild(remind);
body.appendChild(recieve);
const picArr = [
    './images/pic2.jpg',
    './images/pic3.jpg',
    './images/pic4.jpg',
    './images/pic5.jpg',
    './images/pic6.jpg',
    './images/pic7.jpg',
    './images/pic8.jpg',
    './images/pic9.jpg',
    './images/pic10.jpg'
];
window.onload = function() {
    setInterval(function() {
        const now = new Date();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        if (seconds === 3 || seconds === 13 || seconds === 23 || seconds === 33 || seconds === 43 || seconds === 53) {
            remind.innerText = "岐岐让你喝水啦";
            pic.src = picArr[Math.floor(Math.random() * picArr.length)];
            recieve.innerText = "知道啦岐岐";
        }
    }, 1000);
};
recieve.onclick = function() {
    remind.innerText = '';
    pic.src = '';
    recieve.innerText = '';
};