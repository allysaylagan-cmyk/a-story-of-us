// ===============================
// BEGIN STORY
// ===============================

function beginStory() {

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

}