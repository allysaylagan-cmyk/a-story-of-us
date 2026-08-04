function beginStory(){

    const intro = document.querySelector(".intro");

    intro.classList.add("fade-out");

    setTimeout(() => {

        intro.classList.add("hidden");

        intro.classList.remove("fade-out");

        const episodes = document.querySelector(".episodes");

        episodes.classList.remove("hidden");

        episodes.classList.add("fade-in");

        setTimeout(() => {
            episodes.classList.remove("fade-in");
        },500);

    },500);

}

function openEpisode(number){

    document.querySelector(".episodes").classList.add("fade-out");

    setTimeout(() => {

        document.querySelector(".episodes").classList.add("hidden");
        document.querySelector(".episodes").classList.remove("fade-out");

        document.querySelectorAll(".episode-page").forEach(page => {
            page.classList.add("hidden");
        });

        const selected = document.getElementById("episode" + number);

        selected.classList.remove("hidden");
        selected.classList.add("fade-in");

        setTimeout(() => {
            selected.classList.remove("fade-in");
        },800);

    },800);

}

function backToEpisodes(){

    const episode = document.getElementById("episode1");

    episode.classList.add("fade-out");

    setTimeout(() => {

        episode.classList.add("hidden");

        episode.classList.remove("fade-out");

        const episodes = document.querySelector(".episodes");

        episodes.classList.remove("hidden");

        episodes.classList.add("fade-in");

        setTimeout(() => {
            episodes.classList.remove("fade-in");
        },500);

    },500);

}// ===============================
// MEMORY POPUP
// ===============================

function openMemory(title, image, letter){

    document.getElementById("popupTitle").innerHTML = title;

    document.getElementById("popupImage").src = image;

    document.getElementById("popupLetter").innerHTML = letter;

    const popup = document.getElementById("memoryPopup");
    popup.style.display = "flex";

}

function closeMemory(){

    document.getElementById("memoryPopup").style.display = "none";

}