const wrap = document.createElement('div');
const pic = document.createElement('img');
const remind = document.createElement('p');
const recieve = document.createElement('div');
const body = document.getElementsByTagName('body')[0];
wrap.appendChild(remind);
wrap.appendChild(pic);
wrap.appendChild(recieve);
body.appendChild(wrap);
wrap.style.cssText = "width: 100vw;height: 100vh;position: fixed;left: 0;top: 0;display: flex; justify-content: center;align-items: center;background-color: rgba(0, 0, 0, 0.5);flex-direction: column;display: none";
pic.style.cssText = "width: 300px;height: auto";
remind.style.cssText = "color: pink";
recieve.style.cssText = "color: pink;margin-top: 20px";
const picArr = [
    'https://github.com/FilnaChen/chrome-plugin-drinking/blob/master/images/pic2.jpg?raw=true',
    'https://github.com/FilnaChen/chrome-plugin-drinking/blob/master/images/pic3.jpg?raw=true',
    'https://github.com/FilnaChen/chrome-plugin-drinking/blob/master/images/pic4.jpg?raw=true',
    'https://github.com/FilnaChen/chrome-plugin-drinking/blob/master/images/pic5.jpg?raw=true',
    'https://github.com/FilnaChen/chrome-plugin-drinking/blob/master/images/pic6.jpg?raw=true',
    'https://github.com/FilnaChen/chrome-plugin-drinking/blob/master/images/pic7.jpg?raw=true',
    'https://github.com/FilnaChen/chrome-plugin-drinking/blob/master/images/pic8.jpg?raw=true',
    'https://github.com/FilnaChen/chrome-plugin-drinking/blob/master/images/pic9.jpg?raw=true',
    'https://github.com/FilnaChen/chrome-plugin-drinking/blob/master/images/pic10.jpg?raw=true',
];
window.onload = function() {
    setInterval(function() {
        const now = new Date();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        if (minutes ===0 && seconds === 0) {
            pic.src = picArr[Math.floor(Math.random() * picArr.length)];
            pic.onload = function() {
                wrap.style.display = "flex";
                remind.innerText = "岐岐让你喝水啦";
                recieve.innerText = "知道啦岐岐";
            };
        }
    }, 1000);
};
recieve.onclick = function() {
    wrap.style.display = "none";
};