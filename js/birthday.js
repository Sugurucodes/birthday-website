// ===============================
// GALLERY ANIMATION
// ===============================

const button = document.getElementById("journeyBtn");
button.addEventListener("click", () => {

    document.getElementById("gallery").scrollIntoView({

        behavior: "smooth"

    });

    const items = document.querySelectorAll(".gallery-title, .polaroid");

    items.forEach((item, index) => {

        setTimeout(() => {

            item.classList.remove("hidden");
            item.classList.add("show");

        }, 800 + index * 1200);

    });

});


// ===============================
// LOVE LETTER
// ===============================

const envelope = document.getElementById("openLetter");
const letter = document.getElementById("loveLetter");

const lines = [

    "DEAR BUURI i love you hum tumko itna jyada na ki jabse tumko mera banaya buuri,",

    "Bus pyaar hogaya wo b aise waise wala nhi. Direct i love you danger wala re tumse b danger wla even though I do mistakes bhot jyada ",


    "Thank you for every smile, every laugh, every fights,",

    "and every beautiful memories we've created together. ",

    "Happy Birthday, My Love(Buuri,duddu buuri,puchu puyu, pipi buuri,ummmaaaaa buuri) ❤️"

];

const ids = [

    "line1",

    "line2",

    "line3",

    "line4",

    "line5"

];

if (envelope && letter) {

    envelope.addEventListener("click", () => {

    // Prevent clicking again
    envelope.style.pointerEvents = "none";

    const flap = document.querySelector(".envelope-flap");
    const paper = document.querySelector(".paper");

    flap.style.transform = "rotateX(180deg)";
    paper.style.transform = "translateY(-70px)";

    setTimeout(() => {

        letter.classList.remove("hidden");
        letter.classList.add("show");

            // Clear previous text
            ids.forEach(id => {

                const el = document.getElementById(id);

                if (el) {

                    el.textContent = "";
                    el.classList.add("typing");

                }

            });

            // Type one line after another
            typeLines(0);

        }, 500);

    });

}


// ===============================
// TYPE LINES ONE BY ONE
// ===============================

function typeLines(index) {

    if (index >= lines.length) return;

    const element = document.getElementById(ids[index]);

    typeWriter(element, lines[index], () => {

        setTimeout(() => {

            typeLines(index + 1);

        }, 500);

    });

}


// ===============================
// TYPEWRITER
// ===============================

function typeWriter(element, text, callback) {

    let i = 0;

    const timer = setInterval(() => {

        element.textContent += text.charAt(i);

        i++;

        if (i >= text.length) {

            clearInterval(timer);

            if (callback) {

                callback();

            }

        }

    }, 40);

}

const petalsContainer = document.getElementById("petals-container");

function createPetal(){

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.innerHTML = "🌸";

    petal.style.left = Math.random()*100 + "%";

    petal.style.fontSize =
        (18 + Math.random()*20) + "px";

    petal.style.animationDuration =
        (5 + Math.random()*5) + "s";

    petalsContainer.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },10000);

}

setInterval(createPetal,300);

// ===============================
// PHOTO ALBUM SCROLL ANIMATION
// ===============================

const albumCards = document.querySelectorAll(".album-card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry, index) => {

        if(entry.isIntersecting){

            setTimeout(() => {

                entry.target.classList.add("show");

            }, index * 250);

        }

    });

},{
    threshold:0.2
});

albumCards.forEach(card => {

    observer.observe(card);

});

// ===============================
// PHOTO LIGHTBOX
// ===============================

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const closeLightbox = document.getElementById("closeLightbox");

const albumImages = document.querySelectorAll(".album-card img");

albumImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.add("active");

        lightboxImage.src = image.src;

        lightboxCaption.textContent =
            image.nextElementSibling.textContent;

    });

});

// Close button

if (lightbox && closeLightbox) {

    closeLightbox.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {
            lightbox.classList.remove("active");
        }

    });

}

/* ==========================
   CONSTELLATION
========================== */

/* ==========================
   CONSTELLATION
========================== */

const stars = Array.from(document.querySelectorAll(".star"))
    .sort((a, b) => Number(a.dataset.order) - Number(b.dataset.order));
const loveMessage = document.getElementById("loveMessage");
const svg = document.getElementById("constellationLines");

let clickedStars = 0;
let constellationDrawn = false;

stars.forEach(star => {

    star.addEventListener("click", () => {

        if (star.classList.contains("active")) return;

        star.classList.add("active");
        clickedStars++;

        if (clickedStars === stars.length && !constellationDrawn) {

            constellationDrawn = true;

            drawConstellation();

        }

    });

});

function drawConstellation() {

    const skyRect = document
        .getElementById("sky")
        .getBoundingClientRect();

    const points = [];

    stars.forEach(star => {

        const rect = star.getBoundingClientRect();

const x = rect.left - skyRect.left + 14;
const y = rect.top - skyRect.top + 14;

points.push({ x, y });

    });

    svg.innerHTML = "";

    for (let i = 0; i < points.length - 1; i++) {

        const line =
            document.createElementNS(
                "http://www.w3.org/2000/svg",
                "line"
            );

        line.setAttribute("x1", points[i].x);
        line.setAttribute("y1", points[i].y);

        line.setAttribute("x2", points[i + 1].x);
        line.setAttribute("y2", points[i + 1].y);

        svg.appendChild(line);

        setTimeout(() => {

            line.classList.add("show");

        }, i * 400);

    }

    setTimeout(() => {

        loveMessage.classList.add("show");

    }, (points.length - 1) * 400 + 500);

}

/* ==========================
   MUSIC PLAYER
========================== */

const song = document.getElementById("loveSong");
const playBtn = document.getElementById("playSong");
const vinyl = document.getElementById("vinyl");
const needle = document.getElementById("needle");

let isPlaying = false;

playBtn.addEventListener("click",()=>{

    if(!isPlaying){

        song.play();

        vinyl.classList.add("playing");
        needle.classList.add("playing");

        playBtn.innerHTML="⏸ Pause Our Song";

        isPlaying=true;

    }

    else{

        song.pause();

        vinyl.classList.remove("playing");
        needle.classList.remove("playing");

        playBtn.innerHTML="▶ Play Our Song";

        isPlaying=false;

    }

});

song.addEventListener("ended",()=>{

    vinyl.classList.remove("playing");
    needle.classList.remove("playing");

    playBtn.innerHTML="▶ Play Our Song";

    isPlaying=false;

});

/* ==========================
   GRAND FINALE
========================== */

const finalBtn = document.getElementById("finalSurprise");
const finaleOverlay = document.getElementById("finaleOverlay");
const fireworks = document.getElementById("fireworks");

const countdownOverlay =
document.getElementById("countdownOverlay");

const countNumber =
document.getElementById("countNumber");

if(finalBtn){

    finalBtn.addEventListener("click",()=>{

        let count = 3;

        countdownOverlay.classList.add("show");

        countNumber.innerHTML = count;

        const timer = setInterval(()=>{

            count--;

            if(count > 0){

                countNumber.innerHTML = count;

            }

            else{

                clearInterval(timer);

                countNumber.innerHTML = "✨ Happy Birthday ❤️";

                setTimeout(()=>{

                    countdownOverlay.classList.remove("show");

                    finaleOverlay.classList.add("show");

                    launchFireworks();

                    startHearts();

                    startSparkles();

                },1200);

            }

        },1000);

    });

}

/* ==========================
   FIREWORKS
========================== */

function launchFireworks(){

    for(let i=0;i<40;i++){

        setTimeout(()=>{

            createFirework();

        },i*150);

    }

}

function createFirework(){

    const colors = [

        "#ff4d88",
        "#ffd700",
        "#00e5ff",
        "#7CFC00",
        "#ff9800",
        "#ffffff"

    ];

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * (window.innerHeight * 0.6);

    for(let i = 0; i < 35; i++){

        const spark = document.createElement("div");

        spark.className = "spark";

        spark.style.left = x + "px";
        spark.style.top = y + "px";

        spark.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        spark.style.setProperty(
            "--dx",
            (Math.random() - 0.5) * 300 + "px"
        );

        spark.style.setProperty(
            "--dy",
            (Math.random() - 0.5) * 300 + "px"
        );

        fireworks.appendChild(spark);

        setTimeout(()=>{

            spark.remove();

        },1500);

    }

}

/* ==========================
   FLOATING HEARTS
========================== */

function startHearts(){

    const interval=setInterval(()=>{

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"vw";

        heart.style.fontSize=
            (20+Math.random()*25)+"px";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },5000);

    },250);

}

/* ==========================
   MAGIC SPARKLES
========================== */

let sparkleStarted = false;

function startSparkles(){

    if(sparkleStarted) return;

    sparkleStarted = true;

    const container = document.getElementById("sparkles");

    setInterval(()=>{

        const sparkle = document.createElement("div");

        sparkle.className = "sparkle";

        sparkle.innerHTML = "✨";

        sparkle.style.left = Math.random()*100 + "%";

        sparkle.style.top = Math.random()*100 + "%";

        sparkle.style.fontSize =
            (12 + Math.random()*18) + "px";

        container.appendChild(sparkle);

        setTimeout(()=>{

            sparkle.remove();

        },2500);

    },120);

}

/* ==========================
   MUSIC POPUP
========================== */

const musicPopup = document.getElementById("musicPopup");
const yesMusic = document.getElementById("yesMusic");
const noMusic = document.getElementById("noMusic");

if(yesMusic){

    yesMusic.addEventListener("click",()=>{

        musicPopup.style.display="none";

        song.play();

        vinyl.classList.add("playing");
        needle.classList.add("playing");

        playBtn.innerHTML="⏸ Pause Our Song";

        isPlaying=true;

    });

}

if(noMusic){

    noMusic.addEventListener("click",()=>{

        musicPopup.style.display="none";

    });

}

/* ==========================
   FINAL ENDING
========================== */

const finishBtn =
document.getElementById("finishJourney");

const endingScreen =
document.getElementById("endingScreen");

if(finishBtn){

    finishBtn.addEventListener("click",()=>{

        fireworks.innerHTML="";

        finaleOverlay.classList.remove("show");

        setTimeout(()=>{

            endingScreen.classList.add("show");

        },1000);

    });

}