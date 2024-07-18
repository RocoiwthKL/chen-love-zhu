const str = "不是我喜欢的样子你都有，而是你的样子我都喜欢，哪怕是不能见面，但在我疲惫的生活里仍然有一个精神寄托，那就是你！"
const word = document.querySelector('.word');
const end = document.querySelector('.end');
const name = document.querySelector('.name');
const mask = document.querySelector('.mask');
const maskBtn = document.querySelector('.mask-btn')
const music = document.querySelector('audio');
const imgBtn = document.querySelector('.img-btn');
const imgBox = document.querySelector('.img-box');
const bgImgBox = document.querySelector('.bg-img-box');
const heartBeat = document.querySelector('.heart-beat');

let nameBegin = null;
let imgBtnBegin = null;
let writeBegin = null;

const imgArray = [
	"https://z1.ax1x.com/2023/11/12/piGdnnP.jpg",
	"https://z1.ax1x.com/2023/11/12/piGdQAS.jpg",
	"https://z1.ax1x.com/2023/11/12/piGdK78.jpg",
	"https://z1.ax1x.com/2023/11/12/piGdu0f.jpg",
	"https://z1.ax1x.com/2023/11/12/piGdltg.jpg",
	"https://z1.ax1x.com/2023/11/12/piGd1hQ.jpg",
	"https://z1.ax1x.com/2023/11/12/piGd8pj.jpg",
	"https://z1.ax1x.com/2023/11/12/piGdG1s.jpg",
	"https://z1.ax1x.com/2023/11/12/piGsK7q.jpg",
	"https://z1.ax1x.com/2023/11/12/piGsQA0.jpg",
	"https://z1.ax1x.com/2023/11/12/piGsnns.jpg",
	"https://z1.ax1x.com/2023/11/12/piGsuBn.jpg",
	"https://z1.ax1x.com/2023/11/12/piGslNV.jpg",
	"https://z1.ax1x.com/2023/11/12/piGs1hT.jpg",
	"https://z1.ax1x.com/2023/11/12/piGsG3F.jpg",
	"https://z1.ax1x.com/2023/11/12/piGs89U.jpg",
	"https://z1.ax1x.com/2023/11/13/piJK8FP.jpg",
	"https://z1.ax1x.com/2023/11/13/piJKGJf.jpg",
	"https://z1.ax1x.com/2023/11/13/piJKtSS.jpg",
	"https://z1.ax1x.com/2023/11/13/piJKJW8.jpg",
	"https://z1.ax1x.com/2023/11/13/piJK1ot.jpg",
	"https://z1.ax1x.com/2023/11/13/piJKUyQ.jpg",
	"https://z1.ax1x.com/2023/11/13/piJKNQg.jpg",
	"https://z1.ax1x.com/2023/11/13/piJKaLj.jpg",
	"https://z1.ax1x.com/2023/11/13/piJl1oR.jpg",
	"https://z1.ax1x.com/2023/11/13/piJluyF.jpg",
	"https://z1.ax1x.com/2023/11/13/piJlKL4.jpg",
	"https://z1.ax1x.com/2023/11/13/piJl8F1.jpg",
	"https://z1.ax1x.com/2023/11/13/piJlVJ0.jpg",
	"https://z1.ax1x.com/2023/11/13/piJlGJx.jpg",
	"https://z1.ax1x.com/2023/11/13/piJlnQU.jpg",
	"https://z1.ax1x.com/2023/11/13/piJlezT.jpg",
	"https://z1.ax1x.com/2023/11/14/piYk0AO.jpg",
	"https://z1.ax1x.com/2023/11/14/piYks9H.jpg",
	"https://z1.ax1x.com/2023/11/14/piYky3d.jpg",
	"https://z1.ax1x.com/2023/11/14/piYkD4e.jpg",
	"https://z1.ax1x.com/2023/11/14/piYk2ut.jpg",
	"https://z1.ax1x.com/2023/11/14/piYkBND.jpg",
	"https://z1.ax1x.com/2023/11/14/piYk6gA.jpg",
	"https://z1.ax1x.com/2023/11/14/piYkcjI.jpg",
	"https://z1.ax1x.com/2023/11/14/piYEx1J.jpg",
	"https://z1.ax1x.com/2023/11/14/piYVFAK.jpg",
	"https://z1.ax1x.com/2023/11/14/piYVSXR.jpg",
	"https://z1.ax1x.com/2023/11/14/piYEzc9.jpg",
	"https://z1.ax1x.com/2023/11/14/piYV9n1.jpg",
	"https://z1.ax1x.com/2023/11/14/piYVC0x.jpg",
	"https://z1.ax1x.com/2023/11/14/piYVP76.jpg",
	"https://z1.ax1x.com/2023/11/14/piYVktO.jpg",
	"https://z1.ax1x.com/2023/11/15/piY5Ntg.jpg",
	"https://z1.ax1x.com/2023/11/15/piY5sBV.jpg",
	"https://z1.ax1x.com/2023/11/15/piY5BXq.jpg",
	"https://z1.ax1x.com/2023/11/15/piY5w1s.jpg",
	"https://z1.ax1x.com/2023/11/15/piY5dpj.jpg",
	"https://z1.ax1x.com/2023/11/15/piY50cn.jpg",
	"https://z1.ax1x.com/2023/11/15/piY5rn0.jpg",
	"https://z1.ax1x.com/2023/11/15/piY5y7T.jpg",
	"https://z1.ax1x.com/2023/11/15/piYogSJ.jpg",
	"https://z1.ax1x.com/2023/11/15/piYo5TK.jpg",
	"https://z1.ax1x.com/2023/11/15/piYooFO.jpg",
	"https://z1.ax1x.com/2023/11/15/piYoTYD.jpg",
	"https://z1.ax1x.com/2023/11/15/piYohex.jpg",
	"https://z1.ax1x.com/2023/11/15/piYo4w6.jpg",
];

maskBtn.addEventListener('click', () => {
	mask.style.opacity = '0';
	mask.style.zIndex = '-2';
	maskBtn.style.opacity = '0';
	maskBtn.style.zIndex = '-1';
	maskBtn.style.animation = 'none';

	music.play();
	
	bgImgBox.style.backgroundImage = `url(${imgArray[34]})`;

	const words = str.split('');
	const write = () => {
		if (words.length > 0) {
			const span = document.createElement("span");
			let del = words.shift();
			let opc = 0;
			span.innerHTML = del;
			word.appendChild(span);
			let fade = setInterval(() => {
				opc++;
				span.style.opacity = opc / 10;
				span.style.color = "transparent"
				span.style.textShadow = "0 0 10px red, 0 0 15px red";
				span.style.filter = `blur(${(10 / opc - 1)}px)`;
				if (opc >= 10) {
					clearInterval(fade);
				}
			}, 60);
		} else {
			clearInterval(writeBegin);
			writeBegin = null;
			end.style.opacity = '1';
			nameBegin = setTimeout(() => {
				name.style.opacity = '1';
				clearTimeout(nameBegin);
				nameBegin = null;
			}, 400);
			imgBtnBegin = setTimeout(() => {
				imgBtn.style.zIndex = '10';
				imgBtn.style.opacity = '1';
				clearTimeout(imgBtnBegin);
				imgBtnBegin = null;
				
				bgImgBox.style.opacity = "0.6";

				const imgFrag = document.createDocumentFragment();
				for (let i = 0; i < imgArray.length; i++) {
					const imgTag = document.createElement('img');
					imgTag.setAttribute('src', imgArray[i]);
					imgFrag.appendChild(imgTag);
				}
				imgBox.appendChild(imgFrag);
			}, 800);
		}
	}
	writeBegin = setInterval(write, 100);
})

heartBeat.style.color = 'white';
heartBeat.style.textShadow = '0 0 15px white, 0 0 30px white';
heartBeat.addEventListener('click', () => {
	if(music !== null) {
		if(music.paused) {
			heartBeat.style.color = 'white';
			heartBeat.style.textShadow = '0 0 15px white, 0 0 30px white';
			music.play();
		} else {
			heartBeat.style.color = 'red';
			heartBeat.style.textShadow = '0 0 15px red, 0 0 30px red';
			music.pause();
		}
	}
})

const heartFrag = document.createDocumentFragment();
const bigHeartBox = document.querySelector('.big-heart-box');
for (let i = 0; i < 3; i++) {
	const heartBox = document.createElement('div');
	heartBox.classList.add('heart-box');
	heartBox.setAttribute("style", `--delay: ${i * 0.1}s`);
	if (i == 0) {
		for (let j = 0; j < 9 + 2 * i; j++) {
			if (j > 2 && j < 6) {
				heartBox.innerHTML += "<i class='iconfont icon-aixin blank'></i>";
			} else {
				heartBox.innerHTML += "<i class='iconfont icon-aixin heart'></i>";
			}
		}
	} else if (i == 1) {
		for (let j = 0; j < 9 + 2 * i; j++) {
			if (j > 4 && j < 6) {
				heartBox.innerHTML += "<i class='iconfont icon-aixin blank'></i>";
			} else {
				heartBox.innerHTML += "<i class='iconfont icon-aixin heart'></i>";
			}
		}
	} else {
		for (let j = 0; j < 9 + 2 * i; j++) {
			heartBox.innerHTML += "<i class='iconfont icon-aixin heart'></i>";
		}
	}
	heartFrag.appendChild(heartBox);
}
for (let i = 0; i < 2; i++) {
	const heartBox = document.createElement('div');
	heartBox.classList.add('heart-box');
	heartBox.setAttribute("style", `--delay: ${(i + 3) * 0.1}s`);
	for (let j = 0; j < 13; j++) {
		heartBox.innerHTML += "<i class='iconfont icon-aixin heart'></i>";
	}
	heartFrag.appendChild(heartBox);
}
for (let i = 0; i < 6; i++) {
	const heartBox = document.createElement('div');
	heartBox.classList.add('heart-box');
	heartBox.setAttribute("style", `--delay: ${(i + 5) * 0.1}s`);
	for (let j = 0; j < 11 - 2 * i; j++) {
		heartBox.innerHTML += "<i class='iconfont icon-aixin heart'></i>";
	}
	heartFrag.appendChild(heartBox);
}
bigHeartBox.appendChild(heartFrag);

let imgBoxOpen = true;
imgBtn.addEventListener('click', () => {
	if (imgBoxOpen) {
		imgBtn.style.opacity = '0.9';
		imgBox.style.transform = 'translate(-50%, -50%) scale(1)';
		imgBox.style.opacity = '1';
		imgBox.style.zIndex = '9';
		imgBoxOpen = false;
	} else {
		imgBtn.style.opacity = '1';
		imgBox.style.transform = 'translate(-50%, -50%) scale(0)';
		imgBox.style.opacity = '0';
		imgBoxOpen = true;
	}
})

const loveCanvas = document.querySelector('.love-canvas');
let context = loveCanvas.getContext('2d');
let w = window.innerWidth;
let h = window.innerHeight;
loveCanvas.width = w;
loveCanvas.height = h;
const loveNum = 120;
let loves = [];
for (let i = 0; i < loveNum; i++) {
	loves.push({
		x: Math.random() * w,
		y: Math.random() * h,
		r: Math.random() * 5,
	});
}
let moveLove = () => {
	for (let i = 0; i < loveNum; i++) {
		let love = loves[i];
		love.x += (3 - love.r) / -10;
		love.y += (6 - love.r) / 10;
		if (love.x > w) {
			loves[i] = {
				x: 0,
				y: love.y,
				r: love.r
			};
		}
		if (love.y > h) {
			loves[i] = {
				x: Math.random() * w,
				y: 0,
				r: love.r
			};
		}
	}
}
let drawLove = () => {
	context.clearRect(0, 0, w, h);
	context.beginPath();
	for (let i = 0; i < loveNum; i++) {
		let love = loves[i];
		context.fillStyle = "rgba(255,255,255,.6)";
		context.shadowOffsetX = 0;
		context.shadowOffsetY = 0;
		context.shadowColor = 'rgba(255,255,255,.6)';
		context.shadowBlur = 10;
		context.moveTo(love.x, love.y);
		context.arc(love.x, love.y, love.r, 0, Math.PI * 2);
	}
	context.fill();
	moveLove();
}
drawLove();
setInterval(drawLove, 6);