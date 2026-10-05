/* =========================================
   MINA & MADONNA
   CINEMATIC WEDDING INVITATION
========================================= */


/* =========================================
   ELEMENTS
========================================= */

const opening =
    document.getElementById("opening");

const phone =
    document.getElementById("phone");

const invitation =
    document.getElementById("invitation");

const music =
    document.getElementById("weddingMusic");

const musicBtn =
    document.getElementById("musicBtn");


const screens = [
    document.getElementById("screenSeal"),
    document.getElementById("screenPhoto"),
    document.getElementById("screenDate"),
    document.getElementById("screenMonogram"),
    document.getElementById("screenFinal")
];


let started = false;
let musicPlaying = false;


/* =========================================
   CINEMATIC OPENING
========================================= */

function showScreen(index) {

    screens.forEach((screen, i) => {

        if (!screen) return;

        screen.classList.toggle(
            "active",
            i === index
        );

    });

}


/* =========================================
   START EXPERIENCE
========================================= */

function startExperience() {

    if (started) return;

    started = true;

    /*
        STEP 1
        Seal disappears
    */

    showScreen(0);


    setTimeout(() => {

        showScreen(1);

    }, 1600);


    /*
        STEP 2
        Childhood photo
    */

    setTimeout(() => {

        showScreen(2);

    }, 6500);


    /*
        STEP 3
        Date
    */

    setTimeout(() => {

        showScreen(3);

    }, 9000);


    /*
        STEP 4
        Monogram
    */

    setTimeout(() => {

        showScreen(3);

    }, 11500);


    /*
        STEP 5
        Final message
    */

    setTimeout(() => {

        showScreen(4);

    }, 14500);


    /*
        Finish cinematic intro
        and reveal invitation
    */

    setTimeout(() => {

        opening.classList.add("finished");

        invitation.classList.remove("hidden");

        document.body.style.overflow = "auto";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 18500);

}


/* =========================================
   PHONE CLICK
========================================= */

phone.addEventListener(
    "click",
    startExperience
);


/* Keyboard accessibility */

phone.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            startExperience();

        }

    }
);


/* =========================================
   COUNTDOWN
========================================= */

const weddingDate =
    new Date(
        "November 22, 2026 19:00:00"
    ).getTime();


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

setInterval(
    updateCountdown,
    1000
);


/* =========================================
   MUSIC
========================================= */

musicBtn.addEventListener(
    "click",
    function() {

        if (!music) return;


        if (!musicPlaying) {

            music.play()
                .then(() => {

                    musicPlaying = true;

                    musicBtn.innerHTML = "❚❚";

                })
                .catch(() => {

                    musicPlaying = false;

                    musicBtn.innerHTML = "♫";

                });

        } else {

            music.pause();

            musicPlaying = false;

            musicBtn.innerHTML = "♫";

        }

    }
);


/* =========================================
   RSVP
========================================= */

const rsvpForm =
    document.getElementById("rsvpForm");

const thankYou =
    document.getElementById("thankYou");


if (rsvpForm) {

    rsvpForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            rsvpForm.classList.add(
                "hidden"
            );


            thankYou.classList.remove(
                "hidden"
            );


            thankYou.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }
    );

}


/* =========================================
   PREVENT SCROLL DURING INTRO
========================================= */

document.body.style.overflow = "hidden";