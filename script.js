let episode6Count = 0;
const viewedEpisode6 = new Set();
// ===============================
// BEGIN STORY
// ===============================

function beginStory() {
    const music = document.getElementById("bgMusic");
    music.volume = 0.35;
    music.play().catch(() => {});

    const intro = document.querySelector(".intro");
    const episodes = document.querySelector(".episodes");

    intro.classList.add("fade-out");

    setTimeout(() => {

        intro.classList.add("hidden");
        intro.classList.remove("fade-out");

        episodes.classList.remove("hidden");
        episodes.classList.add("fade-in");

        setTimeout(() => {
            episodes.classList.remove("fade-in");
        }, 500);

    }, 500);

}


// ===============================
// OPEN EPISODE
// ===============================

function openEpisode(number) {

    const episodes = document.querySelector(".episodes");

    episodes.classList.add("fade-out");

    setTimeout(() => {

        episodes.classList.add("hidden");
        episodes.classList.remove("fade-out");

        // Hide ALL episode pages first
        document.querySelectorAll(".episode-page").forEach(page => {
            page.classList.add("hidden");
            page.classList.remove("fade-in");
            page.classList.remove("fade-out");
        });

        // Show selected episode
        const selected = document.getElementById("episode" + number);

        selected.classList.remove("hidden");
        selected.classList.add("fade-in");

        setTimeout(() => {
            selected.classList.remove("fade-in");
        }, 500);

    }, 500);

}


// ===============================
// BACK TO EPISODES
// ===============================

function backToEpisodes() {

    // Hide every episode page
    document.querySelectorAll(".episode-page").forEach(page => {
        page.classList.add("hidden");
        page.classList.remove("fade-in");
        page.classList.remove("fade-out");
    });

    // Show episode selection
    const episodes = document.querySelector(".episodes");

    episodes.classList.remove("hidden");
    episodes.classList.add("fade-in");

    setTimeout(() => {
        episodes.classList.remove("fade-in");
    }, 500);

}


// ===============================
// MEMORY POPUP
// ===============================

function openMemory(title, image, letter) {

    document.getElementById("popupTitle").innerHTML = title;
    document.getElementById("popupImage").src = image;
    document.getElementById("popupLetter").innerHTML = letter;

    document.getElementById("memoryPopup").style.display = "flex";

}

function closeMemory() {

    document.getElementById("memoryPopup").style.display = "none";

}function episode6Viewed(id){

    if(viewedEpisode6.has(id)) return;

    viewedEpisode6.add(id);

    episode6Count++;

    if(episode6Count === 6){

        document.getElementById("proposalSection").style.display = "block";

    }

}

// ===============================
// FINAL QUESTION
// ===============================

function showFinalQuestion(){

    document.getElementById("finalPopup").style.display = "flex";

}

function sayYes(){

    document.querySelector(".final-box").innerHTML = `

        <h2>🥹❤️</h2>

        <h1>YAAAYYY!!</h1>

        <p>

            Official na tayo.

            <br><br>

            Thank you for saying yes.

            <br><br>

            I promise to continue writing
            this story with you,
            one chapter at a time.

            <br><br>

            I love you so much. ❤️

        </p>

    `;
createHearts();

}function createHearts(){

    for(let i=0;i<40;i++){

        const heart=document.createElement("div");

        heart.className="floating-heart";

        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"vw";

        heart.style.animationDuration=(3+Math.random()*3)+"s";

        heart.style.fontSize=(20+Math.random()*20)+"px";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },6000);

    }

}function moveNoButton(){

    const btn=document.querySelector(".no-btn");

    const maxX=220;
    const maxY=220;

    const x=Math.random()*maxX-maxX/2;
    const y=Math.random()*maxY-maxY/2;

    btn.style.transform=`translate(${x}px, ${y}px)`;

}function episode6Viewed(id){

    if(viewedEpisode6.has(id)) return;

    viewedEpisode6.add(id);

    episode6Count++;

    if(episode6Count === 6){

        document.getElementById("proposalSection").style.display = "block";

    }

}function toggleMusic(){

    const music = document.getElementById("bgMusic");

    const btn = document.getElementById("musicBtn");

    if(music.paused){

        music.play();

        btn.innerHTML="🎵";

    }else{

        music.pause();

        btn.innerHTML="🔇";

    }

}