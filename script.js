const music = document.getElementById("music");
const heartWrap = document.getElementById("heartWrap");

const heartStage = document.getElementById("heartStage");
const message = document.getElementById("message");
const question = document.getElementById("question");
const please = document.getElementById("please");
const letter = document.getElementById("letter");
const letterText = document.getElementById("letterText");
const ending = document.getElementById("ending");

const photosBox = document.getElementById("photos");
const photo = document.getElementById("photo");

const LETTER = [
  "I love you so much more than I could ever fully explain and being with you is one of the greatest gifts in my life.",
  "You mean everything to me.",
  "You are incredibly beautiful and absolutely gorgeous inside and out.",
  "I love your smile, your eyes, and the whole you baby.",
  "Lucky to call you mine.",
  "I love you, always and forever ♾️",
  "Your Daddy"
];

const PHOTOS = ["photo1.jpg", "photo2.jpg"];
let photoIndex = 0;
let started = false;

heartWrap.onclick = () => {
  if (started) return;
  started = true;

  heartWrap.classList.add("split");
  music.play().catch(() => {});

  setTimeout(() => {
    heartStage.classList.add("hidden");
    message.classList.remove("hidden");
  }, 800);
};

function showQuestion() {
  message.classList.add("hidden");
  question.classList.remove("hidden");
}

function showPlease() {
  question.classList.add("hidden");
  please.classList.remove("hidden");
}

async function startLetter() {
  question.classList.add("hidden");
  please.classList.add("hidden");
  letter.classList.remove("hidden");

  startFlowers();
  startHearts();

  for (const line of LETTER) {
    const p = document.createElement("p");
    letterText.appendChild(p);
    for (const ch of line) {
      p.textContent += ch;
      await new Promise(r => setTimeout(r, 25));
    }
  }

  photosBox.classList.remove("hidden");
  showPhoto();
}

function showPhoto() {
  photo.src = PHOTOS[photoIndex];
}

function nextPhoto() {
  photoIndex++;
  if (photoIndex < PHOTOS.length) {
    showPhoto();
  } else {
    letter.classList.add("hidden");
    ending.classList.remove("hidden");
  }
}

function startFlowers() {
  setInterval(() => {
    const f = document.createElement("span");
    f.textContent = ["🌸","🌹","🌷","🌺"][Math.floor(Math.random()*4)];
    f.style.left = Math.random() * 100 + "vw";
    f.style.animationDuration = "8s";
    document.getElementById("flowers").appendChild(f);
    setTimeout(() => f.remove(), 8000);
  }, 400);
}

function startHearts() {
  setInterval(() => {
    const h = document.createElement("span");
    h.textContent = "💖";
    h.style.left = Math.random() * 100 + "vw";
    h.style.animationDuration = "6s";
    document.getElementById("hearts").appendChild(h);
    setTimeout(() => h.remove(), 6000);
  }, 500);
}
