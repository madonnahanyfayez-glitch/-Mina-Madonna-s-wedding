/* =========================================
   MINA & MADONNA
   VINTAGE CINEMATIC INVITATION
========================================= */


/* =========================================
   ELEMENTS
========================================= */

const opening =
    document.getElementById("opening");

const envelope =
    document.getElementById("envelope");

const seal =
    document.getElementById("seal");

const envelopeStage =
    document.getElementById("envelopeStage");

const introText =
    document.getElementById("introText");

const reveal =
    document.getElementById("reveal");

const invitation =
    document.getElementById("invitation");

const music =
    document.getElementById("weddingMusic");

const musicBtn =
    document.getElementById("musicBtn");


const revealScreens = [
    document.querySelector(".reveal-photo"),
    document.querySelector(".reveal-names"),
    document.querySelector(".reveal-date"),
    document.querySelector(".reveal-final")
];


let started = false;

let musicPlaying = false;


/* =========================================
   SHOW REVEAL
========================================= */

function showReveal(index) {

    revealScreens.forEach(
        (screen, i) => {

            if (!screen) return;

            screen.classList.toggle(
                "show",
                i === index
            );

        }
    );

}


/* =========================================
   OPEN INVITATION
========================================= */

function openInvitation() {

    if (started) return;

    started = true;


    /* envelope opens */

    envelope.classList.add("opened");

    introText.classList.add("hide");

    envelopeStage.classList.add("hide");


    /* reveal layer */

    setTimeout(() => {

        reveal.classList.add("active");

    }, 1100);


    /* childhood photo */

    setTimeout(() => {

        showReveal(0);

    }, 1700);


    /* names */

    setTimeout(() => {

        showReveal(1);

    }, 5200);


    /* date */

    setTimeout(() => {

        showReveal(2);

    }, 7800);


    /* final message */

    setTimeout(() => {

        showReveal(3);

    }, 10200);


    /* move to main invitation */

    setTimeout(() => {

        reveal.classList.remove("active");

        opening.classList.add("finished");

        invitation.classList.remove("hidden");

        document.body.style.overflow = "auto";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 13500);

}


/* =========================================
   CLICK
========================================= */

seal.addEventListener(
    "click",
    openInvitation
);

envelope.addEventListener(
    "click",
    openInvitation
);


/* keyboard */

envelope.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            openInvitation();

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

        document.getElementById("days").innerText =
            "00";

        document.getElementById("hours").innerText =
            "00";

        document.getElementById("minutes").innerText =
            "00";

        document.getElementById("seconds").innerText =
            "00";

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

                    musicBtn.innerHTML =
                        "❚❚";

                })
                .catch(() => {

                    musicPlaying = false;

                    musicBtn.innerHTML =
                        "♫";

                });

        } else {

            music.pause();

            musicPlaying = false;

            musicBtn.innerHTML =
                "♫";

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
   LOCK SCROLL DURING OPENING
========================================= */

document.body.style.overflow =
    "hidden";