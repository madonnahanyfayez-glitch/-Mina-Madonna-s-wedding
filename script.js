/* ==============================
   ENVELOPE
================================ */

const envelopeScreen =
    document.getElementById("envelopeScreen");

const envelope =
    document.querySelector(".envelope");

const openButton =
    document.getElementById("openInvitation");

const invitation =
    document.getElementById("invitation");


openButton.addEventListener("click", function () {

    envelope.classList.add("open");

    setTimeout(() => {

        envelopeScreen.classList.add("opened");

        invitation.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1200);

});


/* ==============================
   COUNTDOWN
================================ */

const weddingDate =
    new Date("November 22, 2026 19:00:00").getTime();


function updateCountdown() {

    const now =
        new Date().getTime();

    const difference =
        weddingDate - now;


    if (difference <= 0) {

        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";

        return;
    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference /
            (1000 * 60 * 60)) % 24
        );


    const minutes =
        Math.floor(
            (difference /
            (1000 * 60)) % 60
        );


    const seconds =
        Math.floor(
            (difference / 1000) % 60
        );


    document.getElementById("days").innerText =
        String(days).padStart(2, "0");


    document.getElementById("hours").innerText =
        String(hours).padStart(2, "0");


    document.getElementById("minutes").innerText =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds").innerText =
        String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(updateCountdown, 1000);


/* ==============================
   MUSIC
================================ */

const music =
    document.getElementById("weddingMusic");

const musicBtn =
    document.getElementById("musicBtn");

let isPlaying = false;


musicBtn.addEventListener("click", function () {

    if (isPlaying) {

        music.pause();

        musicBtn.innerHTML = "♫";

        isPlaying = false;

    } else {

        music.play();

        musicBtn.innerHTML = "❚❚";

        isPlaying = true;

    }

});


/* ==============================
   RSVP - TEMPORARY
================================ */

const rsvpForm =
    document.getElementById("rsvpForm");

const thankYou =
    document.getElementById("thankYou");


rsvpForm.addEventListener("submit", function (event) {

    event.preventDefault();

    rsvpForm.classList.add("hidden");

    thankYou.classList.remove("hidden");

});